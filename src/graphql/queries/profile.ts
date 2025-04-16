import { gql } from '@apollo/client'

export const PROFILE = gql`
  query Profile($identifier: ID) {
    usersPermissionsUser(id: $identifier) {
      data {
        attributes {
          username
          email
        }
      }
    }
  }
`
