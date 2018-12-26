import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Vim from '../components/vim'
import SEO from '../components/seo'

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

    return (
      <Layout>
        <div id="blog-post">
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.spoiler}
            slug={post.fields.slug}
          />
          <Header />
          <h1>{post.frontmatter.title}</h1>
          <small style={{ display: 'block' }}>{post.frontmatter.date}</small>
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
              {next && (
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
      }
      fields {
        slug
      }
    }
  }
`
