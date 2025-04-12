import { fn } from '@storybook/test'

export const cartContextMock = {
  cartProducts: [
    {
      id: '2',
      img: '/img/product-test.jpg',
      name: 'Population Zero',
      price: 89
    },
    {
      id: '4',
      img: '/img/product-test.jpg',
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
