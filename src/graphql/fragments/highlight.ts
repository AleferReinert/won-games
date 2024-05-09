import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
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
