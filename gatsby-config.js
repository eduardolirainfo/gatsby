require('dotenv').config({ path: '.env' })
const path = require('path')

const queries = path.resolve('./src/utils/algolia_queries')

const pluginConfig = [
  'gatsby-plugin-advanced-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Eduardo Lira',
      short_name: 'dudulira',
      description: 'Um blog sobre programação e outras coisas legais.',
      start_url: '/',
      background_color: '#4D3153',
      theme_color: '#200526',
      display: 'minimal-ui',
      icon: 'src/images/ed-icon.png'
    }
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://eduardolira.dev.br',
      sitemap: 'https://eduardolira.dev.br/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
  {
    resolve: 'gatsby-plugin-vercel',
    options: {
      debug: false
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
  {
    resolve: 'gatsby-plugin-disqus',
    options: {
      shortname: 'eduardolirainfo'
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
  'gatsby-plugin-sitemap'
]

if (process.env.CONTEXT === 'production' || process.env.NODE_ENV === 'production') {
  const feed = {
    resolve: 'gatsby-plugin-feed-generator',
    options: {
      generator: 'GatsbyJS',
      rss: true, // Set to true to enable rss generation
      json: true, // Set to true to enable json feed generation
      siteQuery: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `,
      feeds: [
        {
          name: 'rss', // This determines the name of your feed file => feed.json & feed.xml
          query: `
        {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]},
            limit: 100,
            ) {
            edges {
              node {
                html
                frontmatter {
                  date
                  path
                  title
                }
              }
            }
          }
        }
        `,
          normalize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return {
                title: edge.node.frontmatter.title,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                html: edge.node.html
              }
            })
          }
        }
      ]
    }
  }
  const algolia = {
    resolve: 'gatsby-plugin-algolia-search',
    options: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      queries,
      chunkSize: 10000, // default: 1000
      enablePartialUpdates: true
    }
  }

  const analytics = {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      head: false,
      trackingId: process.env.GOOGLE_ANALYTICS_ID
    }
  }

  pluginConfig.push(algolia)
  pluginConfig.push(analytics)
  pluginConfig.push(feed)
}

module.exports = {
  graphqlTypegen: true,
  pathPrefix: '/gatsby',
  siteMetadata: {
    title: 'Eduardo Lira',
    position: 'Developer',
    authorDescription: 'Ideias, café e tecnologias',
    author: '@dudulira',
    pathPrefix: '/',
    siteUrl: 'https://eduardolira.dev.br',
    description: 'Um blog sobre programação e tecnologias da informação.',
    feedUrl: 'https://eduardolira.dev.br/rss.xml'
  },
  plugins: pluginConfig
}
