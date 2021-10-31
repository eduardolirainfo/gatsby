import React from 'react'

// Utilities
import { kebabCase } from 'lodash'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../components/Post/styled'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Seo title={title} />
    <S.PostHeader>
      <S.PostTitle>Tags utilizadas</S.PostTitle>
      <S.PostDescription> Navegue entre as tags do blog </S.PostDescription>
    </S.PostHeader>
    <S.MainContent>
      <ul>
        {group.map((tag) => (
          <S.ListTag key={tag.fieldValue}>
            <S.TagLink
              swipe
              direction='right'
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              <S.Button>
                <S.BtnContent>{tag.fieldValue}</S.BtnContent>
                <S.BtnGlitch />
                <S.BtnLabel>({tag.totalCount})</S.BtnLabel>
              </S.Button>
            </S.TagLink>
          </S.ListTag>
        ))}
      </ul>
      <AniLink swipe direction='right' to='/categorias'>
        <span className='text-criptoBlue-500 hover:text-criptoBlue-900 text-3xl mr-1'>
          &#60;&#60;
        </span>
        Procurar por Categorias
      </AniLink>
    </S.MainContent>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
