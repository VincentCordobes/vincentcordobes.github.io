import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/bio'
import SEO from '../components/seo'
import Layout from '../components/layout'

import './index.css'

const BlogIndex = props => {
  const posts = get(props, 'data.allMarkdownRemark.edges')
  return (
    <Layout>
      <SEO />
      <Bio />
      <ul id="post-list">
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <li key={node.fields.slug}>
              <div>
                <strong>
                  <Link to={node.fields.slug}>{title}</Link>
                </strong>
              </div>
              <small>{node.frontmatter.date}</small>
              <div
                dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
              />
            </li>
          )
        })}
      </ul>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`
