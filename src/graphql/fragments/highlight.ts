import { gql } from '@apollo/client'

export const HIGHLIGHT = gql`
  fragment highlight on ComponentPageHighlight {
    title
    description
    buttonLabel
    buttonUrl
    alignment
    background {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    floatImg {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
  }
`
