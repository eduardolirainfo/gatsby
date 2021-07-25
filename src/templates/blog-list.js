
import React from "react"

// Utilities
import Layout from "../components/Layout"

// Components
import { graphql } from "gatsby"


import Seo from "../components/Seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const postList = data.allMarkdownRemark.edges

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/pagina/${currentPage - 1}`
    const nextPage = `/pagina/${currentPage + 1}`

    return (
      <Layout location={this.props.location}>
        <Seo title="Home" />
        <S.ListWrapper>
          {postList.map(({ node }, i) => {
            return (
              <PostItem
                key={i}
                slug={node.fields.slug}
                background={node.frontmatter.background}
                categories={node.frontmatter.categories}
                date={node.frontmatter.date}
                timeToRead={node.timeToRead}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                description={node.frontmatter.description}
              />
            )
          })}

        </S.ListWrapper>

        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Layout >
    )
  }
}

export default BlogIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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
          timeToRead
        }
      }
    }
  }
`
