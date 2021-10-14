import React from 'react'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostItem from '../components/PostItem'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from '../components/ListWrapper/styled'
import * as P from '../components/Post/styled'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } com a tag "${tag}"`
  return (
    <Layout>
      <Seo
        title='Categoria {tag}'
        description='Navegue entre as categorias de nosso blog'
      />
      <P.PostHeader>
        <P.PostTitleCat>{tagHeader}</P.PostTitleCat>
      </P.PostHeader>
      <S.ListWrapper>
        {edges.map(({ node }, i) => {
          return (
            <PostItem
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
      <P.MainContent>
        <AniLink swipe direction='left' to='/tags'>
          Ver todas as tags
        </AniLink>
      </P.MainContent>
    </Layout>
  )
}
export default Tags
export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
