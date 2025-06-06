import { gql } from '@apollo/client'

export const POPULAR_PRODUCTS = gql`
  fragment popularProducts on Product {
    documentId
    name
    slug
    price
    developers {
      name
    }
    cover {
      url
      alternativeText
    }
  }
`
