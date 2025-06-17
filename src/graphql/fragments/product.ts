import { gql } from '@apollo/client'

export const PRODUCT = gql`
  fragment product on Product {
    documentId
    slug
    name
    price
    promotional_price
    ribbon_label
    cover {
      url
      alternativeText
      formats
    }
    developers {
      name
    }
  }
`
