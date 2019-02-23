module.exports = {
  siteMetadata: {
    title: "Vincent's page",
    author: 'Vincent Cordobes',
    description:
      'I am a software developer 🦁 Highly interested in functional programming',
    siteUrl: 'https://vincentcordobes.github.io',
    social: {
      twitter: '@VincentCordobes',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-katex',
          `gatsby-remark-figure-caption`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-125838540-1',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  limit: 1000
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: { frontmatter: { draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                      }
                      fields {
                        slug
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: `rss.xml`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
