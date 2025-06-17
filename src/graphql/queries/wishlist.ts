import { gql } from '@apollo/client'

export const WISHLIST = gql`
  query Wishlist($userEmail: StringFilterInput) {
    wishlists(filters: { user: { email: $userEmail }, publishedAt: { ne: null } }) {
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
