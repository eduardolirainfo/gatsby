import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Components
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import * as S from "../components/Post/styled"

const CatsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <SEO
        title="Categorias disponíveis"
        description="Navegue entre as categorias de nosso blog"
      />
      <S.PostHeader>
        <S.PostTitle>Categorias disponíveis</S.PostTitle>
        <S.PostDescription> Navegue entre as categorias de nosso blog </S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <ul>
          {group.map(categoria => (
            <li key={categoria.fieldValue}>
              <AniLink
                swipe
                direction="down"
                top="exit"
                to={`/categorias/${kebabCase(categoria.fieldValue)}/`}>
                {categoria.fieldValue} ({categoria.totalCount})
              </AniLink>
            </li>
          ))}
        </ul>
        <AniLink
          to="/tags"
          swipe
          top="exit"
          direction="right"
          duration={.3}
        >
          <span>
            &#60;&#60;
                </span>
              Procurar por Tags
          </AniLink>
      </S.MainContent>
    </Layout >
  )

CatsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

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
