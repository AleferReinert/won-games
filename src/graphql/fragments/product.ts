import { gql } from '@apollo/client'

export const PRODUCT_ENTITY = gql`
  fragment productEntity on GameEntityResponseCollection {
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
      }
    }
  }
`

export const PRODUCT_RELATION = gql`
  fragment productRelation on GameRelationResponseCollection {
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
      }
    }
  }
`
