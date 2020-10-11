import React from "react"
import PropTypes from "prop-types"
// Components
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

import * as S from "../components/ListWrapper/styled"
import * as P from "../components/Post/styled"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  const catHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } na categoria "${category}"`
  return (
    <Layout>
      <SEO
        title="Categoria {category}"
        description="Navegue entre as categorias de nosso blog"
      />
      <P.PostHeader>
        <P.PostTitleCat>{catHeader}</P.PostTitleCat>
      </P.PostHeader>
      <S.ListWrapper>
        {edges.map(({ node }, i) => {
          // const { slug } = node.fields
          // const { title } = node.frontmatter
          return (
            <PostItem
              // to={`/${kebabCase(slug)}/`}
              key={i}
              slug={node.fields.slug}
              background={node.frontmatter.background}
              categories={node.frontmatter.categories}
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
            />
          )
        })}
      </S.ListWrapper>
      <P.LinkCat swipe direction="up" to="/categorias">
        Ver todas as categorias
      </P.LinkCat>
    </Layout>
  )
}
Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Categories
export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            categories
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            tags
          }
        }
      }
    }
  }
`
