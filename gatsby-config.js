require('dotenv').config({ path: '.env' })
const path = require('path')

const queries = path.resolve('./src/utils/algolia_queries')

const pluginConfig = [
  'gatsby-plugin-advanced-sitemap',
  'gatsby-plugin-twitter',
  {
    resolve: 'gatsby-plugin-offline',
    options: {
      precachePages: ['/*']
    }
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://eduardolira.dev.br',
      sitemap: 'https://eduardolira.dev.br/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
  'gatsby-plugin-typescript',
  {
    resolve: 'gatsby-plugin-react-helmet-canonical-urls',
    options: {
      siteUrl: 'https://eduardolira.dev.br/'
    }
  },
  'gatsby-plugin-catch-links',
  'gatsby-plugin-transition-link',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: path.resolve('./static/assets/img'),
      name: 'uploads'
    }
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: path.resolve('./posts')
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'uploads',
      path: path.resolve('./static/assets/img')
    }
  },

  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.resolve('./src/images')
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: path.resolve('./posts')
    }
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: ['Kalam', 'Poppins:400,800'],
      display: 'swap'
    }
  },
  'gatsby-plugin-image',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-emoji',
        'gatsby-remark-responsive-iframe',
        'gatsby-remark-copy-linked-files',
        {
          resolve: 'gatsby-remark-relative-images-v2',
          options: {
            name: 'uploads'
          }
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false
          }
        },
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_self',
            rel: 'nofollow'
          }
        },
        {
          resolve: 'gatsby-remark-smartypants',
          options: {
            dashes: 'oldschool'
          }
        },
        'gatsby-remark-autolink-headers',
        'gatsby-remark-lazy-load',
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            showLineNumbers: true
          }
        }
      ]
    }
  },
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        quality: 100,
        formats: ['auto', 'webp', 'avif'],
        placeholder: 'blurred'
      }
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Eduardo Lira',
      short_name: 'dudulira',
      start_url: '/',
      background_color: '#4D3153',
      theme_color: '#200526',
      display: 'minimal-ui',
      icon: 'src/images/ed-icon.png'
    }
  },

  'gatsby-plugin-sitemap'
]

if (process.env.CONTEXT === 'production') {
  const feed = {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                author
                description
                siteUrl
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
                url: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 95)
                    fields { slug }
                    frontmatter {
                      title
                      description
                      date(formatString: "YYYY-MM-DD")
                      tags
                    }
                  }
                }
              }
            }
          `,
          output: '/rss.xml',
          title: "Eduardo's blog RSS Feed"
        }
      ]
    }
  }
  const algolia = {
    resolve: 'gatsby-plugin-algolia-search',
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true
    }
  }

  const analytics = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      head: false,
      trackingId: 'UA-63318724-1'
    }
  }

  pluginConfig.push(algolia)
  pluginConfig.push(analytics)
  pluginConfig.push(feed)
}

module.exports = {
  siteMetadata: {
    title: 'Eduardo Lira',
    position: 'Developer',
    description: 'Um blog sobre programação e outras coisas legais.',
    authorDescription: 'Ideias, café e tecnologias',
    author: '@dudulira',
    pathPrefix: '/eduardolirainfo/gatsby',
    siteUrl: 'https://eduardolira.dev.br'
  },
  plugins: pluginConfig,
  flags: {
    DEV_SSR: false,
    FAST_DEV: true
  }
}
