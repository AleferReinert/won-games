import { gql } from '@apollo/client'

export const CREATE_WISHLIST = gql`
  mutation CreateWishlist($data: WishlistInput!) {
    createWishlist(data: $data) {
      documentId
      products(filters: { publishedAt: { ne: null } }) {
        documentId
        slug
        cover {
          url
          alternativeText
          formats
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
