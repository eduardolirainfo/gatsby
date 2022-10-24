import React from 'react'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PostItem from '../components/PostItem'

import * as S from '../components/ListWrapper/styled'
import * as P from '../components/Post/styled'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'
    } com a tag "${tag}"`
  return (
    <Layout>
      <Seo
        title={tag}
        description='Navegue entre as categorias de nosso blog' image={undefined} />
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
              description={node.frontmatter.description} timeToRead={undefined} disableCard={undefined} tags={undefined} />
          )
        })}
      </S.ListWrapper>
      <P.MainContent>
        <S.LinkList sswipe direction='left' to='/tags'>
          Ver todas as tags
        </S.LinkList>
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
