const path = require(`path`)
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`
    })
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogList = path.resolve(`./src/templates/blog-list.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)
  const catTemplate = path.resolve(`./src/templates/categories.js`)


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
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                categories
                title
                tags
              }
            }
            next {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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
  ).then(result => {
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
          next,
        },
      })
    })

    // Create blog post list pages
    const postsPerPage = 20
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/pagina/${i + 1}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      })
    })

    // Extract tag data from query
    const tags = result.data.tagsGroup.group

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
    // Extract categories data from query
    const categories = result.data.categoriesGroup.group

    // Make tag pages
    categories.forEach(category => {
      createPage({
        path: `/categorias/${_.kebabCase(category.fieldValue)}/`,
        component: catTemplate,
        context: {
          category: category.fieldValue,
        },
      })
    })
    // const allCategories = Object.keys(countCategories)

    // allCategories.forEach((cat, i) => {
    //   const link = `/categorias/${kebabCase(cat)}`

    //   Array.from({
    //     length: Math.ceil(countCategories[cat] / postsPerPage),
    //   }).forEach((_, i) => {
    //     createPage({
    //       path: i === 0 ? link : `${link}/pagina/${i + 1}`,
    //       component: catTemplate,
    //       context: {
    //         allCategories: allCategories,
    //         category: cat,
    //         limit: postsPerPage,
    //         skip: i * postsPerPage,
    //         currentPage: i + 1,
    //         numPages: Math.ceil(countCategories[cat] / postsPerPage),
    //       },
    //     })
    //   })
    // })
  })
}


// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
