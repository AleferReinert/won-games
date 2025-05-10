import { Dispatch, SetStateAction } from 'react'
import { ProductEntity } from 'types/generated'

interface CreateWishlistProps {
  productId: string
  jwt: string
  sessionId: string
  setWishlistProducts: Dispatch<SetStateAction<ProductEntity[]>>
  setWishlistId: Dispatch<SetStateAction<string | null>>
}

export async function createWishlist({
  productId,
  jwt,
  sessionId,
  setWishlistProducts,
  setWishlistId
}: CreateWishlistProps) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        query: `
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
          data: {
            user: sessionId,
            products: [productId]
          }
        }
      })
    })

    const result = await response.json()

    if (result.errors) {
      console.error('Erro GraphQL:', result.errors)
      return
    }

    const wishlistData = result.data.createWishlist.data
    setWishlistProducts(wishlistData.attributes.products.data ?? [])
    setWishlistId(wishlistData.id)
  } catch (error) {
    console.error('Erro ao criar wishlist:', error)
  }
}
