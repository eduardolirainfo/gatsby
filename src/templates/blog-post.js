import React from "react"
import { graphql } from "gatsby"

import { kebabCase } from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import * as S from "../components/Post/styled"
// const BlogPost = ({ data, pageContext }) => {
//   const post = data.markdownRemark
//   const next = pageContext.nextPost
//   const previous = pageContext.previousPost

//   return (
//     <Layout>
//       <SEO
//         title={post.frontmatter.title}
//         description={post.frontmatter.description}
//         image={post.frontmatter.image}
//       />
//       <S.PostHeader>
//         <S.PostDate>
//           {post.frontmatter.date} • {post.timeToRead} min de leitura
//         </S.PostDate>
//         <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
//         <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
//       </S.PostHeader>
//       <S.MainContent>
//         <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
//       </S.MainContent>
//       <RecommendedPosts next={next} previous={previous} />
//       <Comments url={post.fields.slug} title={post.frontmatter.title} />
//     </Layout>
//   )
// }

// export const query = graphql`
//   query Post($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         description
//         date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//         image
//       }
//       html
//       timeToRead
//     }
//   }
// `

// export default BlogPost

class BlogPostTemplate extends React.Component {
  render() {
    // const { data } = this.props
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const tags = post.frontmatter.tags
    const categories = post.frontmatter.categories

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image}
        />
        <S.PostHeader>
          {categories && (
            <S.PostCategories
              swipe
              direction="up"
              top="entry"
              to={`/categorias/${kebabCase(categories)}`}
            >{categories}
            </S.PostCategories>
          )}
          <S.PostDate>
            • {post.frontmatter.date} • {post.timeToRead} min de leitura
          </S.PostDate>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>

        </S.PostHeader>
        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </S.MainContent>
        {tags && tags.length > 0 ? ` - ` : ``}
        <S.ItemTags>
          {tags ? <>{tags.map(((tag, index) => {
            return (
              <li key={tag + `tag`}>
                <S.TagLink
                  swipe
                  direction="down"
                  top="exit"
                  to={`/tags/${kebabCase(tag)}`}>
                  {tag}
                </S.TagLink>
              </li>
            )
          }))}</> : <></>}
        </S.ItemTags>
        <RecommendedPosts next={next} previous={previous} />
        <Comments url={post.fields.slug} title={post.frontmatter.title} />
      </Layout >
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
            site {
            siteMetadata {
            title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug } }) {
            fields {
            slug
          }
      frontmatter {
            title
            description
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            categories
            image
            tags
      }
      html
      timeToRead
    }
  }
`
