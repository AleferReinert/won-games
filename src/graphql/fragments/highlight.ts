import { gql } from '@apollo/client'

export const HIGHLIGHT = gql`
  fragment highlight on ComponentPageHighlight {
    title
    description
    buttonLabel
    buttonUrl
    alignment
    background {
      url
      alternativeText
    }
    floatImg {
      url
      alternativeText
    }
  }
`
