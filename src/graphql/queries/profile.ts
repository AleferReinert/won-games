import { gql } from '@apollo/client'

export const PROFILE = gql`
  query Profile($email: String) {
    usersPermissionsUsers(filters: { email: { eq: $email } }) {
      email
      username
    }
  }
`
