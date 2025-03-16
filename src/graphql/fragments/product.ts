import { gql } from '@apollo/client'

export const ProductEntityFragment = gql`
  fragment ProductEntityFragment on GameEntityResponseCollection {
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

export const ProductRelationFragment = gql`
  fragment GameRelationFragment on GameRelationResponseCollection {
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
