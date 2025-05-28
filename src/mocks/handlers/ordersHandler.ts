import { graphql, HttpResponse } from 'msw'

export const ordersHandler = graphql.query('Orders', () => {
  return HttpResponse.json({
    data: {
      orders: {
        data: [
          {
            id: '12',
            attributes: {
              card_brand: 'mastercard',
              card_last4: '1829',
              createdAt: '2025-03-16T18:55:33.990Z',
              products: {
                data: [
                  {
                    id: '11',
                    attributes: {
                      name: 'Product 1',
                      price: 0,
                      cover: {
                        data: {
                          attributes: {
                            formats: {
                              thumbnail: {
                                url: '/img/test/product.jpg'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            id: '83',
            attributes: {
              card_brand: 'visa',
              card_last4: '4242',
              createdAt: '2025-04-22T18:55:33.990Z',
              products: {
                data: [
                  {
                    id: '12',
                    attributes: {
                      name: 'Product 2',
                      price: 19,
                      cover: {
                        data: {
                          attributes: {
                            formats: {
                              thumbnail: {
                                url: '/img/test/product.jpg'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
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
