require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Eduardo Lira`,
    position: `Developer`,
    description: `A blog about backend, Frontend development and other cool stuff.`,
    author: `@dudulira`,
    pathPrefix: "/eduardolirainfo/gatsby",
    siteUrl: `https://eduardolira.xyz`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,

    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
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
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    // Class prefix for <pre> tags containing syntax highlighting;
                    // defaults to 'language-' (e.g. <pre class="language-js">).
                    // If your site loads Prism into the browser at runtime,
                    // (e.g. for use with libraries like react-live),
                    // you may use this to prevent Prism from re-processing syntax.
                    // This is an uncommon use-case though;
                    // If you're unsure, it's best to use the default value.
                    classPrefix: "language-",
                    // This is used to allow setting a language for inline code
                    // (i.e. single backticks) by creating a separator.
                    // This separator is a string and will do no white-space
                    // stripping.
                    // A suggested value for English speakers is the non-ascii
                    // character '›'.
                    inlineCodeMarker: null,
                    // This lets you set up language aliases.  For example,
                    // setting this to '{ sh: "bash" }' will let you use
                    // the language "sh" which will highlight using the
                    // bash highlighter.
                    aliases: {},
                    // This toggles the display of line numbers globally alongside the code.
                    // To use it, add the following line in gatsby-browser.js
                    // right after importing the prism color scheme:
                    //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                    // Defaults to false.
                    // If you wish to only show line numbers on certain code blocks,
                    // leave false and use the {numberLines: true} syntax below
                    showLineNumbers: false,
                    // If setting this to true, the parser won't handle and highlight inline
                    // code used in markdown i.e. single backtick code like `this`.
                    noInlineHighlight: false,
                    // This adds a new language definition to Prism or extend an already
                    // existing language definition. More details on this option can be
                    // found under the header "Add new language definition or extend an
                    // existing language" below.
                    languageExtensions: [
                      {
                        language: "superscript",
                        extend: "javascript",
                        definition: {
                          superscript_types: /(SuperType)/,
                        },
                        insertBefore: {
                          function: {
                            superscript_keywords: /(superif|superelse)/,
                          },
                        },
                      },
                    ],
                    // Customize the prompt used in shell output
                    // Values below are default
                    prompt: {
                      user: "root",
                      host: "localhost",
                      global: false,
                    },
                    // By default the HTML entities <>&'" are escaped.
                    // Add additional HTML escapes by providing a mapping
                    // of HTML entities and their escape value IE: { '}': '&#123;' }
                    escapeEntities: {},
                  },
                },
              ],
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
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
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
      },
    },
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
                  custom_elements: [
                    {
                      "content:encoded": edge.node.html,
                    },
                  ],
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
            title: "RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: false,
      },
    },
  ],
}
