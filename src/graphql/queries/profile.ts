import { gql } from '@apollo/client'

export const PROFILE = gql`
  query Profile {
    me {
      username
      email
    }
  }
`
