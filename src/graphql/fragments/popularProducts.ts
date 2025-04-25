import { gql } from '@apollo/client'

export const POPULAR_PRODUCTS = gql`
  fragment popularProducts on ProductRelationResponseCollection {
    data {
      id
      attributes {
        name
        slug
        price
        developers {
          data {
            attributes {
              name
            }
          }
        }
        cover {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
`
