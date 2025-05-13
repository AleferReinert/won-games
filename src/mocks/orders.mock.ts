import { OrdersPageProps } from 'pages/account/orders/index.page'
import { nextAuthSessionMock } from './nextAuthSession.mock'

export const ordersMock: OrdersPageProps = {
  session: nextAuthSessionMock,
  orders: [
    {
      id: '1',
      img: '/img/test/product.jpg',
      name: 'Population Zero',
      price: 215.0
    },
    {
      id: '2',
      img: '/img/test/product.jpg',
      name: 'Borderlands 2',
      price: 315.0,
      downloadLink: '/link',
      paymentInfo: {
        creditCardNumber: '**** **** **** 8734',
        creditCardBrand: 'mastercard',
        creditCardFlag: '/img/credit-cards/mastercard.png',
        purchaseDate: 'Purchase made on 01/02/2023 at 22:34'
      }
    }
  ]
}
