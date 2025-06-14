import { MockedResponse } from '@apollo/client/testing'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { RecommendedProductsQuery } from 'types/generated'

export const recommendedShowcaseResponseMock: MockedResponse<RecommendedProductsQuery> = {
  request: {
    query: RECOMMENDED_PRODUCTS
  },
  result: {
    data: {
      recommended: {
        title: 'You make like this',
        highlight: {
          background: {
            url: '/img/test/highlight.jpg'
          },
          title: 'The Legend of Zelda: Breath of the Wild',
          buttonLabel: 'Buy now',
          buttonUrl: '/link',
          description: 'Lorem ipsum'
        },
        products: [
          {
            documentId: '3',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: ''
            },
            developers: [
              {
                name: 'Troika Games'
              }
            ],
            name: 'The Legend of Zelda: Breath of the Wild',
            price: 24,
            slug: 'the-legend-of-zelda-breath-of-the-wild',
            ribbon_label: ''
          },
          {
            documentId: '2',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: 'Vampire: The Masquerade – Bloodlines'
            },
            developers: [
              {
                name: 'Troika Games'
              }
            ],
            name: 'Vampire: The Masquerade – Bloodlines',
            price: 99,
            slug: 'vampire-the-masquerade-bloodlines',
            ribbon_label: ''
          },
          {
            documentId: '1',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: ''
            },
            developers: [
              {
                name: 'inXile Entertainment'
              }
            ],
            name: 'Wasteland 3 Colorado Collection',
            price: 49,
            slug: 'wasteland-3-colorado-collection',
            ribbon_label: ''
          },
          {
            documentId: '4',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: ''
            },
            developers: [
              {
                name: 'Rockstar Games'
              }
            ],
            name: 'Grand Theft Auto V',
            price: 60,
            slug: 'grand-theft-auto-v',
            promotional_price: 30,
            ribbon_label: '50% off'
          },
          {
            documentId: '5',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: ''
            },
            developers: [
              {
                name: 'CD Projekt'
              }
            ],
            name: 'Cyberpunk 2077',
            price: 10,
            slug: 'cyberpunk-2077',
            ribbon_label: ''
          },
          {
            documentId: '6',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: ''
            },
            developers: [
              {
                name: 'Bethesda'
              }
            ],
            name: 'The Elder Scrolls V: Skyrim',
            price: 30,
            slug: 'the-elder-scrolls-v-skyrim',
            ribbon_label: 'New'
          },
          {
            documentId: '7',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: ''
            },
            developers: [
              {
                name: 'Ubisoft'
              }
            ],
            name: "Assassin's Creed Valhalla",
            price: 40,
            slug: 'assassins-creed-valhalla',
            ribbon_label: ''
          },
          {
            documentId: '8',
            cover: {
              url: '',
              alternativeText: ''
            },
            developers: [
              {
                name: 'Square Enix'
              }
            ],
            name: 'Final Fantasy XV',
            price: 35,
            slug: 'final-fantasy-xv',
            ribbon_label: ''
          },
          {
            documentId: '9',
            cover: {
              url: '/img/test/product.jpg',
              alternativeText: ''
            },
            developers: [
              {
                name: 'Valve'
              }
            ],
            name: 'Half-Life: Alyx',
            price: 50,
            slug: 'half-life-alyx',
            ribbon_label: ''
          }
        ]
      }
    }
  }
}
