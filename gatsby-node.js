const path = require('path')
const _ = require('lodash')

const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemarkFrontmatter {
      image: String
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages'
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blog-post.tsx')
  const blogList = path.resolve('./src/templates/blog-list.tsx')
  const tagTemplate = path.resolve('./src/templates/tags.tsx')
  const catTemplate = path.resolve('./src/templates/categories.tsx')

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
                description
                categories
                title                
                tags
                image
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                title
                date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
                date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      })
    })

    // Create blog post list pages
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/' : `/page/${index + 1}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })

    // Extract tag data from query
    const tags = result.data.tagsGroup.group

    // Make tag pages
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue
        }
      })
    })
    // Extract categories data from query
    const categories = result.data.categoriesGroup.group

    // Make tag pages
    categories.forEach((category) => {
      createPage({
        path: `/categorias/${_.kebabCase(category.fieldValue)}/`,
        component: catTemplate,
        context: {
          category: category.fieldValue
        }
      })
    })
  })
}
