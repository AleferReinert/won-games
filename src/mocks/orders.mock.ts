import { OrdersPageProps } from 'pages/account/orders/index.page'

export const ordersMock: OrdersPageProps = {
  orders: [
    {
      id: '1',
      img: '/img/product-test.jpg',
      name: 'Population Zero',
      price: 215.0
    },
    {
      id: '2',
      img: '/img/product-test.jpg',
      name: 'Borderlands 2',
      price: 315.0,
      downloadLink: '/link',
      paymentInfo: {
        creditCardNumber: '**** **** **** 8734',
        creditCardBrand: 'mastercard',
        creditCardFlag: '/img/creditCards/mastercard.png',
        purchaseDate: 'Purchase made on 01/02/2023 at 22:34'
      }
    }
  ]
}
