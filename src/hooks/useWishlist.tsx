import { useMutation, useQuery } from '@apollo/client'
import { WishlistContext } from 'contexts/WishlistContext'
import { CREATE_WISHLIST } from 'graphql/mutations/createWishlist'
import { UPDATE_WISHLIST } from 'graphql/mutations/updateWishlist'
import { WISHLIST } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/react'
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { ProductEntity, Query } from 'types/generated'

interface WishlistProviderProps {
  children: ReactNode
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistProducts, setWishlistProducts] = useState<ProductEntity[]>([])
  const [wishlistId, setWishlistId] = useState<string | null>(null)
  const wishlistProductsIds = useMemo(() => wishlistProducts.map((product) => product.id), [wishlistProducts])
  const { data: session, status } = useSession()
  console.log('useSession session: ', session)
  console.log('useSession status: ', status)

  const [createWishlist, { loading: loadingCreateWishlist }] = useMutation(CREATE_WISHLIST, {
    context: {
      headers: {
        Authorization: session ? `Bearer ${session.jwt}` : 'sem jwt'
      }
    },
    onCompleted: (data) => {
      setWishlistProducts(data.createWishlist.data.attributes.products.data ?? [])
      setWishlistId(data.createWishlist.data.id)
    }
  })

  const [updateWishlist, { loading: loadingUpdateWishlist }] = useMutation(UPDATE_WISHLIST, {
    context: {
      headers: {
        Authorization: `Bearer ${session?.jwt}`
      }
    },
    onCompleted: (data) => {
      setWishlistProducts(data.updateWishlist.data.attributes.products.data ?? [])
    }
  })

  const { data, loading: loadingQuery } = useQuery<Pick<Query, 'wishlists'>>(WISHLIST, {
    skip: !session?.user?.email,
    variables: { userEmail: { eq: session?.user?.email } },
    context: {
      headers: {
        Authorization: `Bearer ${session?.jwt}`
      }
    }
  })

  const loadingInitial = !session || loadingQuery || loadingCreateWishlist || loadingUpdateWishlist

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
        variables: {
          id: wishlistId,
          data: {
            products: [...wishlistProductsIds, productId]
          }
        }
      })
    } else {
      console.log('Entrou em addToWishlist ELSE')
      console.log('Clicou em addToWishlist, productId: ', productId)
      console.log('Clicou em addToWishlist, status: ', status)
      console.log('Clicou em addToWishlist, session.id: ', session?.id)
      console.log('Clicou em addToWishlist, session: ', session)
      return createWishlist({
        variables: {
          data: {
            user: session?.id,
            products: [productId]
          }
        }
      })
    }
  }

  const removeFromWishlist = (productId: string) => {
    if (!wishlistId) return Promise.resolve()

    return updateWishlist({
      variables: {
        id: wishlistId,
        data: {
          products: wishlistProductsIds.filter((id) => id !== productId)
        }
      }
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
