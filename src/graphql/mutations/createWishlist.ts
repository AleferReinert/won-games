import { gql } from '@apollo/client'

export const CREATE_WISHLIST = gql`
  mutation CreateWishlist($data: WishlistInput!) {
    createWishlist(data: $data) {
      data {
        id
        attributes {
          products {
            data {
              id
              attributes {
                slug
                cover {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                name
                developers {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                price
                promotional_price
                ribbon_label
              }
            }
          }
        }
      }
    }
  }
`
