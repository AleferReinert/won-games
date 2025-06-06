import { graphql, HttpResponse } from 'msw'
import { Enum_Componentpagehighlight_Alignment, RecommendedProductsQuery } from 'types/generated'

export const recommendedProductsHandler = graphql.query<RecommendedProductsQuery>('RecommendedProducts', () => {
  return HttpResponse.json({
    data: {
      recommended: {
        title: 'You make like this',
        highlight: {
          title: 'CS:GO',
          description: 'Lorem ipsum.',
          buttonLabel: 'buy now',
          buttonUrl: '/link',
          alignment: Enum_Componentpagehighlight_Alignment.Left,
          background: {
            url: '/uploads/a_plague_tale_requiem_062159c4cc_5f80dc6be1_423db60ccf.jpg'
          },
          floatImg: {
            url: '/uploads/logo_icon_1181787142.webp'
          }
        },
        products: [
          {
            documentId: '21',
            slug: 'dome-keeper',
            cover: {
              url: '/uploads/dome_keeper_867d0efd45_c38c719f2b.jpg'
            },
            name: 'Dome Keeper',
            developers: [
              {
                name: '4A Games'
              }
            ],
            price: 24,
            promotional_price: 12,
            ribbon_label: 'new'
          }
        ]
      }
    }
  })
})
