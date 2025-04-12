import { CartItemProps } from 'components/CartItem/CartItem'

export const cartItemsMinMock: Omit<CartItemProps, 'paymentInfo' | 'downloadLink'>[] = [
  {
    id: '1',
    name: 'Population Zero',
    img: '/img/product-test.jpg',
    price: 215.0
  },
  {
    id: '2',
    name: 'Borderlands 2',
    img: '/img/product-test.jpg',
    price: 315.0
  },
  {
    id: '3',
    name: 'Diablo 1',
    img: '/img/product-test.jpg',
    price: 79.0
  }
]
