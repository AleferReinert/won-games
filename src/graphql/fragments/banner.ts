import { gql } from '@apollo/client'

export const BANNER = gql`
  fragment banner on BannerEntityResponseCollection {
    data {
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
          link
        }
        ribbon {
          text
          color
          size
        }
      }
    }
  }
`
