import { gql } from '@apollo/client'
import { PRODUCT_RELATION } from 'graphql/fragments/product'

export const WISHLIST = gql`
  query Wishlist($userEmail: StringFilterInput) {
    wishlists(filters: { user: { email: $userEmail } }) {
      data {
        id
        attributes {
          products {
            ...productRelation
          }
        }
      }
    }
  }
  ${PRODUCT_RELATION}
`
