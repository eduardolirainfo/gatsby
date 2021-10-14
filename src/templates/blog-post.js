import React from 'react'
import { graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import RecommendedPosts from '../components/RecommendedPosts'
import Comments from '../components/Comments'
import * as S from '../components/Post/styled'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const tags = post.frontmatter.tags
  const categories = post.frontmatter.categories

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.BackButton
          swipe
          direction='right'
          to='/'
        >← Voltar na listagem
        </S.BackButton>
        {categories && (
          <S.PostCategories
            swipe
            direction='right'
            to={`/categorias/${kebabCase(categories)}`}
          >
            # {categories}
          </S.PostCategories>
        )}
        <S.PostDate>
          • {post.frontmatter.date} • {post.timeToRead} min
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      {tags && tags.length > 0 ? ' - ' : ''}
      <S.ItemTags>
        {tags
          ? (
            <div>
              {tags.map((tag, index) => {
                return (
                  <li key={tag + 'tag'}>
                    <S.TagPost
                      swipe
                      direction='right'
                      to={`/tags/${kebabCase(tag)}`}
                    >
                      <S.Button>
                        <S.BtnContent>{tag}</S.BtnContent>
                        <S.BtnGlitch />
                      </S.Button>
                    </S.TagPost>
                  </li>
                )
              })}
            </div>
            )
          : (
            <div />
            )}
      </S.ItemTags>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
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
        date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
        categories
        tags
      }
      html
      timeToRead
    }
  }
`
