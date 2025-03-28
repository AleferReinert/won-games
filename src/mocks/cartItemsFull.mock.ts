import { CartItemProps } from 'components/CartItem/CartItem'

export const cartItemsFullMock: CartItemProps[] = [
  {
    id: '1',
    name: 'Population Zero',
    img: '/img/game-test.jpg',
    price: 215.0,
    downloadLink: '/link',
    paymentInfo: {
      creditCardNumber: '**** **** **** 8734',
      creditCardBrand: 'mastercard',
      creditCardFlag: '/img/creditCards/mastercard.png',
      purchaseDate: 'Purchase made on 01/02/2023 at 22:34'
    }
  },
  {
    id: '2',
    name: 'Borderlands 2',
    img: '/img/game-test.jpg',
    price: 315.0,
    downloadLink: '/link',
    paymentInfo: {
      creditCardNumber: '**** **** **** 4326',
      creditCardBrand: 'mastercard',
      creditCardFlag: '/img/creditCards/mastercard.png',
      purchaseDate: 'Purchase made on 07/06/2023 at 00:42'
    }
  },
  {
    id: '3',
    name: 'Diablo 1',
    img: '/img/game-test.jpg',
    price: 79.0,
    downloadLink: '/link',
    paymentInfo: {
      creditCardNumber: '**** **** **** 1923',
      creditCardBrand: 'visa',
      creditCardFlag: '/img/creditCards/visa.png',
      purchaseDate: 'Purchase made on 21/12/2022 at 13:32'
    }
  }
]
