import { gql } from '@apollo/client'

export const HIGHLIGHT = gql`
  fragment highlight on ComponentPageHighlight {
    title
    description
    buttonLabel
    buttonLink
    alignment
    background {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    float {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
  }
`
