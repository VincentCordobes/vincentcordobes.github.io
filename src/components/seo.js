import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`

function SEO({ image, description, slug, ...props }) {
  const data = useStaticQuery(query)

  const { siteMetadata } = data.site
  const metaDescription = description || siteMetadata.description
  const metaImage = image ? `${siteMetadata.siteUrl}${image}` : null
  const url = `${siteMetadata.siteUrl}${slug}`
  const title = props.title || siteMetadata.title

  return (
    <Helmet>
      <title>
        {props.title
          ? `${props.title} | ${siteMetadata.title}`
          : siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:card" content={"summary"} />
      <meta name="twitter:site" content={siteMetadata.social.twitter} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:image" content={metaImage} />

      <meta
        name="google-site-verification"
        content={"kjM2mfXvQ9XJ7BqEPTHNHWZ62wJsC5G_GtuPX1oy0EY"}
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  title: "",
  slug: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  datePublished: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
}

export default SEO
