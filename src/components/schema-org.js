import pickBy from "lodash/fp/pickBy"
import identity from "lodash/fp/identity"

export function schemaOrg({
  author,
  datePublished,
  title,
  description,
  image,
  siteUrl,
  lang,
}) {
  const schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    headline: title,
    name: title,
    image,
    publisher: {
      "@type": "Organization",
      name: author,
      logo: {
        "@type": "ImageObject",
        url: siteUrl + "/favicon.ico",
      },
    },
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    description,
    thumbnailUrl: image,
    mainEntityOfPage: {
      "@type": "WebSite",
      "@id": siteUrl,
    },
    inLanguage: lang,
  }

  return pickBy(identity, schema)
}
