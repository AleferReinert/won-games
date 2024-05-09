import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on BannerEntityResponseCollection {
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
