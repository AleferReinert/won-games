import { gql } from '@apollo/client'

export const GET_PAGE_HOME = gql`
  query getPageHome {
    banners {
      data {
        attributes {
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          title
          subtitle
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
  }
`
