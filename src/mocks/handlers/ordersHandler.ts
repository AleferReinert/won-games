import { graphql, HttpResponse } from 'msw'
import { OrdersQuery } from 'types/generated'

export const ordersHandler = graphql.query<OrdersQuery>('Orders', () => {
  return HttpResponse.json({
    data: {
      orders: [
        {
          documentId: '12',
          card_brand: 'mastercard',
          card_last4: '1829',
          createdAt: '2025-03-16T18:55:33.990Z',
          products: [
            {
              documentId: '11',
              name: 'Product 1',
              price: 0,
              cover: {
                formats: {
                  thumbnail: {
                    url: '/img/test/product.jpg'
                  }
                }
              }
            }
          ]
        },
        {
          documentId: '83',
          card_brand: 'visa',
          card_last4: '4242',
          createdAt: '2025-04-22T18:55:33.990Z',
          products: [
            {
              documentId: '12',
              name: 'Product 2',
              price: 19,
              cover: {
                formats: {
                  thumbnail: {
                    url: '/img/test/product.jpg'
                  }
                }
              }
            }
          ]
        }
      ]
    }
  })
})

export const ordersEmptyHandler = graphql.query('Orders', () => {
  return HttpResponse.json({
    data: {
      orders: {
        data: []
      }
    }
  })
})
