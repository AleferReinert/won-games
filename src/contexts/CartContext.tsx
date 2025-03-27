import { CartItemProps } from 'components/CartItem/CartItem'
import { createContext } from 'react'

interface CartContextProps {
  cartProducts: CartItemProps[]
  totalQuantity: number
  totalPrice: number
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContextDefaultValues = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0,
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

export const CartContext = createContext<CartContextProps>(CartContextDefaultValues)
