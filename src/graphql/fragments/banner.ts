import { gql } from '@apollo/client'

export const BANNER = gql`
  fragment banner on Banner {
    documentId
    img {
      url
      alternativeText
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
`
