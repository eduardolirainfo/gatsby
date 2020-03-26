// import React from "react"
// import { graphql } from "gatsby"

// import Layout from "../components/Layout"
// import SEO from "../components/Seo"
// import PostItem from "../components/PostItem"
// import Pagination from "../components/Pagination"

// import * as S from "../components/ListWrapper/styled"

// const BlogList = props => {
//   const postList = props.data.allMarkdownRemark.edges

//   const { currentPage, numPages } = props.pageContext
//   const isFirst = currentPage === 1
//   const isLast = currentPage === numPages
//   const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
//   const nextPage = `/page/${currentPage + 1}`

//   return (
//     <Layout>
//       <SEO title="Home" />
//       <S.ListWrapper>
//         {postList.map(
//           ({
//             node: {
//               frontmatter: { background, category, date, description, title },
//               timeToRead,
//               fields: { slug },
//             },
//           }) => (
//             <PostItem
//               background={background}
//               category={category}
//               date={date}
//               description={description}
//               title={title}
//               timeToRead={timeToRead}
//               slug={slug}
//             />
//           )
//         )}
//       </S.ListWrapper>

//       <Pagination
//         isFirst={isFirst}
//         isLast={isLast}
//         currentPage={currentPage}
//         numPages={numPages}
//         prevPage={prevPage}
//         nextPage={nextPage}
//       />
//     </Layout>
//   )
// }

// export const query = graphql`
//   query PostList($skip: Int!, $limit: Int!) {
//     allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             background
//             category
//             date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//             description
//             title
//           }
//           timeToRead
//         }
//       }
//     }
//   }
// `

// export default BlogList

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(({ node }, i) => (
          <PostItem
            key={i}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            timeToRead={node.timeToRead}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            background={node.frontmatter.background}
            category={node.frontmatter.category}
          />
        ))}
      </S.ListWrapper>

      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export default BlogList

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            background
            title
            category
          }
          timeToRead
        }
      }
    }
  }
`
