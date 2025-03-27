import { useQuery } from '@apollo/client'
import { CartContext } from 'contexts/CartContext'
import { GET_ALL_PRODUCTS } from 'graphql/queries/getAllProducts'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { Query } from 'types/generated'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartProductsMapper } from 'utils/mappers'

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProductIds, setCartProductIds] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem('cartProducts')
    if (data) setCartProductIds(data)
  }, [])

  const { data, loading } = useQuery<Pick<Query, 'games'>>(GET_ALL_PRODUCTS, {
    skip: !cartProductIds.length,
    variables: {
      filters: {
        id: {
          in: cartProductIds
        }
      }
    }
  })
  const saveCartProducts = (newCartProductIds: string[]) => {
    setCartProductIds(newCartProductIds)
    setStorageItem('cartProducts', cartProductIds)
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
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
