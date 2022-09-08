// import React from 'react'
// import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from 'gatsby'

// function SEO ({ description, lang, meta, title, image }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             siteUrl
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description

//   const url = site.siteMetadata.siteUrl
//   const ogImage = `${url}${image || '/assets/img/cover.jpg'}`

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: 'description',
//           content: metaDescription
//         },
//         {
//           property: 'og:title',
//           content: title
//         },
//         {
//           property: 'og:description',
//           content: metaDescription
//         },
//         {
//           property: 'og:image',
//           content: ogImage
//         },
//         {
//           property: 'og:type',
//           content: 'website'
//         },
//         {
//           name: 'twitter:card',
//           content: 'summary_large_image'
//         },
//         {
//           name: 'twitter:image:src',
//           content: ogImage
//         },
//         {
//           name: 'twitter:creator',
//           content: site.siteMetadata.author
//         },
//         {
//           name: 'twitter:title',
//           content: title
//         },
//         {
//           name: 'twitter:description',
//           content: metaDescription
//         }
//       ].concat(meta)}
//     />
//   )
// }

// export const JSONLD = () => {
//   const jsonld = {
//     '@context': 'https://schema.org',
//     '@type': 'WebSite',
//     url: 'https://eduardolira.dev.br'
//   }
//   // Add the script to Helmet to output the JSON-LD formatted data in the head tag
//   return (
//     <Helmet>
//       {jsonld && <script type='application/ld+json'>{JSON.stringify(jsonld)}</script>}
//     </Helmet>
//   )
// }

// SEO.defaultProps = {
//   lang: 'pt-br',
//   meta: [],
//   description: ''
// }

// export default SEO

import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import React from 'react'

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description
  }

  return (
    <Helmet title={seo.title}>
      <meta name='description' content={seo.description} />
    </Helmet>
  )
}

export default SEO
