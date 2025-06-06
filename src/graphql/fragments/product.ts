import { gql } from '@apollo/client'

export const PRODUCT_ENTITY = gql`
  fragment productEntity on Product {
    documentId
    cover {
      url
      alternativeText
    }
    developers {
      name
    }
    name
    price
    slug
    promotional_price
    ribbon_label
  }
`

export const PRODUCT_RELATION = gql`
  fragment productRelation on Product {
    documentId
    slug
    cover {
      url
      alternativeText
    }
    name
    developers {
      name
    }
    price
    promotional_price
    ribbon_label
  }
`
