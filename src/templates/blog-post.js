import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/fp/get'

import Layout from '../components/layout'
import Vim from '../components/vim'
import SEO from '../components/seo'

// import 'katex/dist/katex.min.css'
import './../styles/prism-theme.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import './blog-post.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" rel="home">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    const image = get('frontmatter.thumbnail.childImageSharp.sizes.src', post)

    next && console.log(next.frontmatter.draft)

    return (
      <Layout>
        <div id="blog-post">
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.spoiler}
            image={image}
            slug={post.fields.slug}
          />
          <Helmet>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
              integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y"
              crossorigin="anonymous"
            />
          </Helmet>
          <Header />
          <h1>{post.frontmatter.title}</h1>
          <p>
            <small className="mono">{post.frontmatter.date}</small>
          </p>
          <div
            id="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Vim />

          {(previous || next) && <hr />}
          <ul id="blog-post-footer">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>

            <li>
              {next && !get('frontmatter.draft', next) && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 144) {
              src
              srcSet
              sizes
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
