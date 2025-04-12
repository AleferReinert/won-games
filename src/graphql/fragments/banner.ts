import { gql } from '@apollo/client'

export const BANNER = gql`
  fragment banner on BannerEntityResponseCollection {
    data {
      id
      attributes {
        img {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        title
        description
        button {
          label
          url
        }
        ribbon {
          label
          color
          size
        }
      }
    }
  }
`
