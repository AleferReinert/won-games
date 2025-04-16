import { gql } from '@apollo/client'
import { PRODUCT_RELATION } from 'graphql/fragments/product'

export const UPDATE_WISHLIST = gql`
  mutation UpdateWishlish($id: ID!, $data: WishlistInput!) {
    updateWishlist(id: $id, data: $data) {
      data {
        id
        attributes {
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
          products {
            ...productRelation
          }
        }
      }
    }
  }
  ${PRODUCT_RELATION}
`
