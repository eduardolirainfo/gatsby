import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ContactForm from '../components/ContactForm'
import ContactWrapper from '../components/ContactForm/styled'

const Contact = ({ path, data }) => {
  return (
    <Layout seo={Seo} path={path}>
      <ContactWrapper>
        <h1>Contact</h1>
        <p>Let's chat! I'm open to lots of new opportunities, freelance or a fulltime position.
        </p>
        <ContactForm />
      </ContactWrapper>
    </Layout>
  )
}

Contact.propTypes = {
  path: PropTypes.string.isRequired
}

export default Contact

export const CONTACT_PAGE_QUERY = graphql`
  query CONTACT_PAGE_QUERY {
    pageImg: file(relativePath: { eq: "page-meta-img.jpg" }) {
      publicURL # used for SEO
    }
  }
`
