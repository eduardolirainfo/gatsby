import React from 'react'

// Utilities
import Layout from '../components/Layout'

// Components
import { graphql } from 'gatsby'

import Seo from '../components/Seo'
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from '../components/ListWrapper/styled'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo title='Home' />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { background, categories, date, description, title, tags },
              timeToRead,
              fields: { slug }
            }
          }, i) => (
            <PostItem
              key={i}
              slug={slug}
              background={background}
              categories={categories}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              tags={tags}
            />
          )
        )}
      </S.ListWrapper>

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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

export default BlogList
