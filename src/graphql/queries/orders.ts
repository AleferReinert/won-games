import { gql } from '@apollo/client'

export const ORDERS = gql`
  query Orders($identifier: ID) {
    orders(filters: { users_permissions_user: { id: { eq: $identifier } } }) {
      data {
        id
        attributes {
          card_brand
          card_last4
          createdAt
          products {
            data {
              id
              attributes {
                name
                price
                cover {
                  data {
                    attributes {
                      formats
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
