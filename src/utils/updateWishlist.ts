import { ProductEntity } from 'types/generated'

interface UpdateWishlistProps {
  wishlistId: string
  productIds: string[]
  jwt: string
  onSuccess: (products: ProductEntity[]) => void
}

export async function updateWishlist({ wishlistId, productIds, jwt, onSuccess }: UpdateWishlistProps) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        query: `
          mutation UpdateWishlish($id: ID!, $data: WishlistInput!) {
            updateWishlist(id: $id, data: $data) {
              data {
                id
                attributes {
                  products {
                    data {
                      id
                      attributes {
                        slug
                        name
                        price
                        promotional_price
                        ribbon_label
                        cover {
                          data {
                            attributes {
                              url
                              alternativeText
                            }
                          }
                        }
                        developers {
                          data {
                            attributes {
                              name
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
        `,
        variables: {
          id: wishlistId,
          data: {
            products: productIds
          }
        }
      })
    })

    const result = await response.json()

    if (result.errors) {
      console.error('Erro GraphQL:', result.errors)
      return
    }

    const updatedProducts = result.data.updateWishlist.data.attributes.products.data
    onSuccess(updatedProducts)
  } catch (error) {
    console.error('Erro ao atualizar wishlist:', error)
  }
}
