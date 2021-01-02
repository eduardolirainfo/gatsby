require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

const pluginConfig = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images-v2",
          options: {
            name: "uploads",
          },
        },
        {
          resolve: "@weknow/gatsby-remark-codepen",
          options: {
            theme: "dark",
            height: 400,
          },
        },
        `gatsby-remark-responsive-iframe`,
        `gatsby-remark-external-links`,
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            icon: false,
            removeAccents: true,
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`,
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-netlify-cms`,

  `gatsby-plugin-netlify`,
  {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed do site",
          },
        ],
      }
    },
  // needs to be the first to work with gatsby-remark-images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets/img`,
    },
    resolve: "gatsby-plugin-netlify-cache",
    options: {
      cachePublic: true,
    },
  },

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  // {
  // resolve: `gatsby-plugin-algolia-search`,
  // options: {
  //   appId: process.env.GATSBY_ALGOLIA_APP_ID,
  //   apiKey: process.env.ALGOLIA_ADMIN_KEY,
  //   indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  //   queries,
  //   chunkSize: 10000, // default: 1000
  //   enablePartialUpdates: true,
  // },
  // },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Eduardo Lira`,
      short_name: `Eduardo Lira`,
      start_url: `/`,
      background_color: `#4D3153`,
      theme_color: `#200526`,
      display: `minimal-ui`,
      icon: `src/images/ed-icon.png`, // This path is relative to the root of the site.
    },
  },
  {
   resolve: `gatsby-plugin-offline`,
  options: {
    precachePages: [`/*`]
  },
  },

  `gatsby-plugin-sitemap`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline

  // {
  //   resolve: `gatsby-plugin-google-fonts`,
  //     options: {
  //       fonts: [
  //         `Lato\:300,400,400i,700`,
  //         `Share+Tech+Mono`,
  //         `Orbitron\:300,400,400i,700` // you can also specify font weights and styles
  //       ],
  //       display: 'swap'
  //     }
  // },

  // "gatsby-plugin-page-progress",
  // {
  //   resolve: "gatsby-plugin-page-progress",
  //   options: {
  //     includePaths: [
  //       "/",
  //       {
  //         regex: "^/",
  //       },
  //     ],
  //     excludePaths: ["/sobre", "/"],
  //     height: 3,
  //     prependToBody: false,
  //     color: `#b17acc`,
  //   },
  // },
]
if (process.env.CONTEXT === "production") {
  const algolia = {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true
    }
  }

  //   const analytics = {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
  //     head: false,
  //     anonymize: true,
  //     respectDNT: true
  //   }
  // }

    const analytics = {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        process.env.GOOGLE_ANALYTICS_ID
      ],
      gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
        }
    }
  }

  pluginConfig.push(algolia)
  pluginConfig.push(analytics)
}

module.exports = {
  siteMetadata: {
    title: `Eduardo Lira`,
    position: `Developer`,
    description: `Um blog sobre desenvolvimento web, programação e outras coisas legais.`,
    authorDescription: `Ideias, café e tecnologias`,
    author: `@dudulira`,
    pathPrefix: "/eduardolirainfo/gatsby",
    siteUrl: `https://eduardolira.net.br`,
  },
  plugins: pluginConfig,
}
