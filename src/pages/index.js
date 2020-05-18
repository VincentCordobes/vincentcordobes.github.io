import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/fp/get'

import Bio from '../components/bio'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Vim from '../components/vim'

import './index.css'

const BlogIndex = props => {
  const posts = get('data.allMarkdownRemark.edges', props)
  return (
    <Layout>
      <SEO />
      <Bio />
      <p>I occasionally write stuff here either in english or french:</p>
      <ul id="post-list">
        {posts.map(({ node }) => {
          const title = get('frontmatter.title', node) || node.fields.slug
          const lang = get('frontmatter.lang', node)
          return (
            <li key={node.fields.slug}>
              <small className="mono date">{node.frontmatter.date}</small>
              {' - '}
              <Link to={node.fields.slug}>{title}</Link>
              {lang && <small className="mono date"> ({lang}) </small>}
              {/* <div */}
              {/*   dangerouslySetInnerHTML={{ __html: node.frontmatter.description }} */}
              {/* /> */}
            </li>
          )
        })}
      </ul>
      {/* <Vim /> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
            description
            lang
            draft
          }
        }
      }
    }
  }
`
