import { useQuery } from '@apollo/client'
import { CartContext } from 'contexts/CartContext'
import { PRODUCTS } from 'graphql/queries/products'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { Query } from 'types/generated'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartProductsMapper } from 'utils/mappers'

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProductIds, setCartProductIds] = useState<string[]>([])
  const [loadingState, setLoadingState] = useState(true)

  useEffect(() => {
    const data: string[] = getStorageItem('cartProducts')
    if (data) setCartProductIds(data)
  }, [])

  const { data, loading, error } = useQuery<Pick<Query, 'games'>>(PRODUCTS, {
    skip: !cartProductIds.length,
    variables: {
      filters: {
        id: {
          in: cartProductIds
        }
      }
    }
  })

  useEffect(() => {
    if (!loading && !error && data) {
      setLoadingState(false)
    }
  }, [loading, error, data])

  const saveCartProducts = (newCartProductIds: string[]) => {
    setCartProductIds(newCartProductIds)
    setStorageItem('cartProducts', newCartProductIds)
  }
  const formattedProducts = cartProductsMapper(data?.games?.data || [])
  const totalQuantity = formattedProducts.length
  const totalPrice = formattedProducts.reduce((acc, product) => acc + product.price, 0)
  const isInCart = (id: string) => cartProductIds.includes(id)
  const addToCart = (id: string) => {
    const newCartProductIds = [...cartProductIds, id]
    saveCartProducts(newCartProductIds)
  }
  const removeFromCart = (id: string) => {
    const newCartProductIds = cartProductIds.filter((productId) => productId !== id)
    saveCartProducts(newCartProductIds)
  }
  const clearCart = () => saveCartProducts([])

  return (
    <CartContext.Provider
      value={{
        cartProducts: formattedProducts,
        totalQuantity,
        totalPrice,
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading: loading || loadingState
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
