import { gql } from '@apollo/client'

export const ORDERS = gql`
  query Orders($userEmail: String) {
    orders(filters: { users_permissions_user: { email: { eq: $userEmail } } }) {
      documentId
      card_brand
      card_last4
      createdAt
      products(filters: { publishedAt: { ne: null } }) {
        documentId
        name
        price
        cover {
          formats
        }
      }
    }
  }
`
