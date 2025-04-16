import { gql } from '@apollo/client'
import { PRODUCT_RELATION } from 'graphql/fragments/product'

export const CREATE_WISHLIST = gql`
  mutation CreateWishlist($data: WishlistInput!) {
    createWishlist(data: $data) {
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
