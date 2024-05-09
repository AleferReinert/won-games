import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on GameEntityResponseCollection {
    data {
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
