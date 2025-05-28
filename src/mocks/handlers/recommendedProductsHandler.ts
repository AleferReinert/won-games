import { graphql, HttpResponse } from 'msw'

export const recommendedProductsHandler = graphql.query('RecommendedProducts', () => {
  return HttpResponse.json({
    data: {
      recommended: {
        data: {
          attributes: {
            title: 'You make like this',
            highlight: {
              title: 'CS:GO',
              description: 'Lorem ipsum.',
              buttonLabel: 'buy now',
              buttonUrl: '/link',
              alignment: 'left',
              background: {
                data: {
                  attributes: {
                    url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg',
                    alternativeText: null
                  }
                }
              },
              floatImg: {
                data: {
                  attributes: {
                    url: '/uploads/logo_icon_1181787142.webp',
                    alternativeText: null
                  }
                }
              }
            },
            products: {
              data: [
                {
                  id: '21',
                  attributes: {
                    slug: 'dome-keeper',
                    cover: {
                      data: {
                        attributes: {
                          url: '/uploads/dome_keeper_867d0efd45_c38c719f2b.jpg',
                          alternativeText: null
                        }
                      }
                    },
                    name: 'Dome Keeper',
                    developers: {
                      data: [
                        {
                          attributes: {
                            name: '4A Games'
                          }
                        }
                      ]
                    },
                    price: 24,
                    promotional_price: 12,
                    ribbon_label: 'new'
                  }
                }
              ]
            }
          }
        }
      }
    }
  })
})
