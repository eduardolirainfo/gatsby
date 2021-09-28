import React from "react"
import PropTypes from "prop-types"

// Utilities
import { kebabCase } from "lodash"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Components
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as S from "../components/Post/styled"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
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
            {/* <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
            </Link> */}
            <S.TagLink
              swipe
              direction="right"
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
            >
              <S.Button>
                <S.Btn__content>{tag.fieldValue}</S.Btn__content>
                <S.Btn__glitch></S.Btn__glitch>
                <S.Btn__label>({tag.totalCount})</S.Btn__label>
              </S.Button>
            </S.TagLink>
          </S.ListTag>
        ))}
      </ul>
      <AniLink swipe direction="right" to="/categorias">
        <span className="text-criptoBlue-500 hover:text-criptoBlue-900 text-3xl mr-1">
          &#60;&#60;
        </span>
        Procurar por Categorias
      </AniLink>
    </S.MainContent>
  </Layout>
)

TagsPage.propTypes = {
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
