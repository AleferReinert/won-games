import { gql } from '@apollo/client'

export const UPDATE_WISHLIST = gql`
  mutation UpdateWishlish($id: ID!, $data: WishlistInput!) {
    updateWishlist(documentId: $id, data: $data) {
      documentId
      user {
        documentId
        username
      }
      products(filters: { publishedAt: { ne: null } }) {
        documentId
        slug
        cover {
          url
          alternativeText
        }
        name
        developers {
          name
        }
        price
        promotional_price
        ribbon_label
      }
    }
  }
`
