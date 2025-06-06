import { gql } from '@apollo/client'

export const PRODUCT_BY_SLUG = gql`
  query ProductBySlug($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      documentId
      cover {
        url
        alternativeText
      }
      name
      short_description
      description
      price
      promotional_price
      gallery {
        url
        alternativeText
      }
      developers {
        name
      }
      release_date
      platforms {
        name
      }
      publisher {
        name
      }
      rating
      categories {
        name
      }
    }
  }
`
