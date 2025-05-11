import { fn } from '@storybook/test'
import { CartContextProps } from 'contexts/CartContext'

export const cartContextMock: CartContextProps = {
  cartProducts: [
    {
      id: '2',
      img: '/img/test/product.jpg',
      name: 'Population Zero',
      price: 89
    },
    {
      id: '4',
      img: '/img/test/product.jpg',
      name: 'Borderlands 2',
      price: 129
    }
  ],
  totalQuantity: 2,
  totalPrice: 218,
  isInCart: (id: string) => ['2', '4'].includes(id),
  addToCart: fn(),
  removeFromCart: fn(),
  clearCart: () => null,
  loading: false
}
