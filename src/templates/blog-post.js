import React from "react"
import { graphql } from "gatsby"

import { kebabCase } from "lodash"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import * as S from "../components/Post/styled"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const tags = post.frontmatter.tags
    const categories = post.frontmatter.categories

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image}
        />
        <S.PostHeader>
          {categories && (
            <S.PostCategories
              swipe
              direction="down"
              to={`/categorias/${kebabCase(categories)}`}
            >
              # {categories}
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
          {tags ? (
            <>
              {tags.map((tag, index) => {
                return (
                  <li key={tag + `tag`}>
                    <S.TagPost
                    swipe
                    direction="down"
                    to={`/tags/${kebabCase(tag)}`}><S.Button>
  <S.Btn__content>
    {tag}
</S.Btn__content>
  <S.Btn__glitch></S.Btn__glitch>
</S.Button>
</S.TagPost>
                  </li>
                )
              })}
            </>
          ) : (
            <></>
          )}
        </S.ItemTags>
        <RecommendedPosts next={next} previous={previous} />
        <Comments url={post.fields.slug} title={post.frontmatter.title} />
      </Layout>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
