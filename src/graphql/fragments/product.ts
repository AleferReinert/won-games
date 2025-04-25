import { gql } from '@apollo/client'

export const PRODUCT_ENTITY = gql`
  fragment productEntity on ProductEntityResponseCollection {
    data {
      id
      attributes {
        cover {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        developers {
          data {
            attributes {
              name
            }
          }
        }
        name
        price
        slug
        promotional_price
        ribbon_label
      }
    }
  }
`

export const PRODUCT_RELATION = gql`
  fragment productRelation on ProductRelationResponseCollection {
    data {
      id
      attributes {
        slug
        cover {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        name
        developers {
          data {
            attributes {
              name
            }
          }
        }
        price
        promotional_price
        ribbon_label
      }
    }
  }
`
