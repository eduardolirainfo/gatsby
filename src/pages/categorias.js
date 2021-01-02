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
      <S.PostDescription>
        {" "}
        Navegue entre as categorias de nosso blog{" "}
      </S.PostDescription>
    </S.PostHeader>
    <S.MainContent>
      <ul>
        {group.map(categories => (
         <S.ListTag key={categories.fieldValue}>
            <S.TagLink
              swipe
              direction="right"
              duration={0.3}
              to={`/categorias/${kebabCase(categories.fieldValue)}/`}
            >
            <S.Button>
  <S.Btn__content>
    {categories.fieldValue}
</S.Btn__content>
  <S.Btn__glitch></S.Btn__glitch>
  <S.Btn__label>({categories.totalCount})</S.Btn__label>
</S.Button>
 </S.TagLink>
          </S.ListTag>




        ))}
      </ul>
      <AniLink swipe to="/tags" direction="right" >
        <span>&#60;&#60;</span>
        Procurar por Tags
      </AniLink>
    </S.MainContent>
  </Layout>
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
