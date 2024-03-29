import React from 'react'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as S from '../components/Post/styled'

const CatsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Seo
      title='Categorias disponíveis'
      description='Navegue entre as categorias de nosso blog'
    />
    <S.PostHeader>
      <S.PostTitle>Categorias disponíveis</S.PostTitle>
      <S.PostDescription>
        {' '}
        Navegue entre as categorias de nosso blog{' '}
      </S.PostDescription>
    </S.PostHeader>
    <S.MainContent>
      <ul>
        {group.map((categories) => (
          <S.ListTag key={categories.fieldValue}>
            <S.TagLink
              swipe
              direction='right'
              duration={0.3}
              to={`/categorias/${kebabCase(categories.fieldValue)}/`}
            >
              <S.Button>
                <S.BtnContent>{categories.fieldValue}</S.BtnContent>
                <S.BtnGlitch />
                <S.BtnLabel>({categories.totalCount})</S.BtnLabel>
              </S.Button>
            </S.TagLink>
          </S.ListTag>
        ))}
      </ul>
      <S.LinkList swipe to='/tags' direction='right'>
        <span>&#60;&#60;
          Procurar por Tags </span>
      </S.LinkList>
    </S.MainContent>
  </Layout>
)

export default CatsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
