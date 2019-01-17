import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/bio'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Vim from '../components/vim'

import './index.css'

const BlogIndex = props => {
  const posts = get(props, 'data.allMarkdownRemark.edges')
  return (
    <Layout>
      <SEO />
      <Bio />
      <p>
        I occasionally write stuff here either in english or french, it depends
        on the mood:
      </p>
      <ul id="post-list">
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const lang = get(node, 'frontmatter.lang')
          return (
            <li key={node.fields.slug}>
              <small className="mono date">{node.frontmatter.date}</small>
              {' - '}
              <Link to={node.fields.slug}>{title}</Link>
              {lang && <small className="mono date"> ({lang}) </small>}
              {/* <div */}
              {/*   dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }} */}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
            spoiler
            lang
          }
        }
      }
    }
  }
`
