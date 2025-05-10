import { useQuery } from '@apollo/client'
import { WishlistContext } from 'contexts/WishlistContext'
import { WISHLIST } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/react'
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { ProductEntity, Query } from 'types/generated'
import { createWishlist } from 'utils/createWishlist'
import { updateWishlist } from 'utils/updateWishlist'

interface WishlistProviderProps {
  children: ReactNode
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistProducts, setWishlistProducts] = useState<ProductEntity[]>([])
  const [wishlistId, setWishlistId] = useState<string | null>(null)
  const wishlistProductsIds = useMemo(() => wishlistProducts.map((product) => product.id), [wishlistProducts])
  const { data: session } = useSession()

  const { data, loading: loadingQuery } = useQuery<Pick<Query, 'wishlists'>>(WISHLIST, {
    skip: !session?.user?.email,
    variables: { userEmail: { eq: session?.user?.email } }
  })

  const loadingInitial = !session || loadingQuery

  useEffect(() => {
    setWishlistProducts(data?.wishlists.data[0]?.attributes.products.data ?? [])
    setWishlistId(data?.wishlists.data[0]?.id ?? null)
  }, [data])

  const isInWishlist = (productId: string) => {
    return wishlistProducts.some((product) => product.id === productId)
  }

  const addToWishlist = (productId: string) => {
    if (wishlistId) {
      return updateWishlist({
        jwt: session?.jwt ?? '',
        wishlistId,
        productIds: [...wishlistProductsIds, productId],
        onSuccess: setWishlistProducts
      })
    } else {
      return createWishlist({
        jwt: session?.jwt ?? '',
        sessionId: session?.id ?? '',
        productId,
        setWishlistProducts,
        setWishlistId
      })
    }
  }

  const removeFromWishlist = (productId: string) => {
    if (!wishlistId) return Promise.resolve()

    return updateWishlist({
      jwt: session?.jwt ?? '',
      wishlistId,
      productIds: wishlistProductsIds.filter((id) => id !== productId),
      onSuccess: setWishlistProducts
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingInitial,
        products: wishlistProducts
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
