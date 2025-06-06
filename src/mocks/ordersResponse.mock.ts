import { MockedResponse } from '@apollo/client/testing'
import { ORDERS } from 'graphql/queries/orders'
import { OrdersQuery } from 'types/generated'

export const ordersResponseMock: MockedResponse<OrdersQuery> = {
  request: {
    query: ORDERS,
    variables: { identifier: 6 }
  },
  result: {
    data: {
      orders: [
        {
          documentId: '44',
          card_brand: 'visa',
          card_last4: '4242',
          createdAt: '2025-05-23T19:45:22.990Z',
          products: [
            {
              documentId: '4',
              name: 'Heroes of Might',
              price: 0,
              cover: {
                formats: {
                  large: {
                    ext: '.jpg',
                    url: '/uploads/large_heroes_of_might_and_magic_4_complete_bf0a70057b_9e3c5eea71.jpg',
                    hash: 'large_heroes_of_might_and_magic_4_complete_bf0a70057b_9e3c5eea71',
                    mime: 'image/jpeg',
                    name: 'large_heroes_of_might_and_magic_4_complete_bf0a70057b.jpg',
                    path: null,
                    size: 75.2,
                    width: 1000,
                    height: 390
                  },
                  small: {
                    ext: '.jpg',
                    url: '/uploads/small_heroes_of_might_and_magic_4_complete_bf0a70057b_9e3c5eea71.jpg',
                    hash: 'small_heroes_of_might_and_magic_4_complete_bf0a70057b_9e3c5eea71',
                    mime: 'image/jpeg',
                    name: 'small_heroes_of_might_and_magic_4_complete_bf0a70057b.jpg',
                    path: null,
                    size: 22.92,
                    width: 500,
                    height: 195
                  },
                  medium: {
                    ext: '.jpg',
                    url: '/uploads/medium_heroes_of_might_and_magic_4_complete_bf0a70057b_9e3c5eea71.jpg',
                    hash: 'medium_heroes_of_might_and_magic_4_complete_bf0a70057b_9e3c5eea71',
                    mime: 'image/jpeg',
                    name: 'medium_heroes_of_might_and_magic_4_complete_bf0a70057b.jpg',
                    path: null,
                    size: 46.1,
                    width: 750,
                    height: 292
                  },
                  thumbnail: {
                    ext: '.jpg',
                    url: '/img/test/product.jpg',
                    hash: 'thumbnail_heroes_of_might_and_magic_4_complete_bf0a70057b_9e3c5eea71',
                    mime: 'image/jpeg',
                    name: 'thumbnail_heroes_of_might_and_magic_4_complete_bf0a70057b.jpg',
                    path: null,
                    size: 6.48,
                    width: 245,
                    height: 95
                  }
                }
              }
            },
            {
              documentId: '3',
              name: 'Coming Soon One',
              price: 108,
              cover: {
                formats: {
                  large: {
                    ext: '.jpg',
                    url: '/uploads/large_anno_1404_gold_edition_24be89b878_aad65ddf17.jpg',
                    hash: 'large_anno_1404_gold_edition_24be89b878_aad65ddf17',
                    mime: 'image/jpeg',
                    name: 'large_anno_1404_gold_edition_24be89b878.jpg',
                    path: null,
                    size: 79.25,
                    width: 1000,
                    height: 390
                  },
                  small: {
                    ext: '.jpg',
                    url: '/uploads/small_anno_1404_gold_edition_24be89b878_aad65ddf17.jpg',
                    hash: 'small_anno_1404_gold_edition_24be89b878_aad65ddf17',
                    mime: 'image/jpeg',
                    name: 'small_anno_1404_gold_edition_24be89b878.jpg',
                    path: null,
                    size: 24.72,
                    width: 500,
                    height: 195
                  },
                  medium: {
                    ext: '.jpg',
                    url: '/uploads/medium_anno_1404_gold_edition_24be89b878_aad65ddf17.jpg',
                    hash: 'medium_anno_1404_gold_edition_24be89b878_aad65ddf17',
                    mime: 'image/jpeg',
                    name: 'medium_anno_1404_gold_edition_24be89b878.jpg',
                    path: null,
                    size: 49.04,
                    width: 750,
                    height: 292
                  },
                  thumbnail: {
                    ext: '.jpg',
                    url: '/img/test/product.jpg',
                    hash: 'thumbnail_anno_1404_gold_edition_24be89b878_aad65ddf17',
                    mime: 'image/jpeg',
                    name: 'thumbnail_anno_1404_gold_edition_24be89b878.jpg',
                    path: null,
                    size: 7.16,
                    width: 245,
                    height: 95
                  }
                }
              }
            }
          ]
        },
        {
          documentId: '43',
          card_brand: 'visa',
          card_last4: '4242',
          createdAt: '2025-04-22T18:55:33.990Z',
          products: [
            {
              documentId: '2',
              name: 'Vampire: The Masquerade – Bloodlines  ',
              price: 99,
              cover: {
                formats: {
                  large: {
                    ext: '.jpg',
                    url: '/uploads/large_vampire_the_masquerade_bloodlines_ccbb94ccf7_6bdb8332bd.jpg',
                    hash: 'large_vampire_the_masquerade_bloodlines_ccbb94ccf7_6bdb8332bd',
                    mime: 'image/jpeg',
                    name: 'large_vampire_the_masquerade_bloodlines_ccbb94ccf7.jpg',
                    path: null,
                    size: 58.31,
                    width: 1000,
                    height: 390
                  },
                  small: {
                    ext: '.jpg',
                    url: '/uploads/small_vampire_the_masquerade_bloodlines_ccbb94ccf7_6bdb8332bd.jpg',
                    hash: 'small_vampire_the_masquerade_bloodlines_ccbb94ccf7_6bdb8332bd',
                    mime: 'image/jpeg',
                    name: 'small_vampire_the_masquerade_bloodlines_ccbb94ccf7.jpg',
                    path: null,
                    size: 20.89,
                    width: 500,
                    height: 195
                  },
                  medium: {
                    ext: '.jpg',
                    url: '/uploads/medium_vampire_the_masquerade_bloodlines_ccbb94ccf7_6bdb8332bd.jpg',
                    hash: 'medium_vampire_the_masquerade_bloodlines_ccbb94ccf7_6bdb8332bd',
                    mime: 'image/jpeg',
                    name: 'medium_vampire_the_masquerade_bloodlines_ccbb94ccf7.jpg',
                    path: null,
                    size: 39.03,
                    width: 750,
                    height: 292
                  },
                  thumbnail: {
                    ext: '.jpg',
                    url: '/img/test/product.jpg',
                    hash: 'thumbnail_vampire_the_masquerade_bloodlines_ccbb94ccf7_6bdb8332bd',
                    mime: 'image/jpeg',
                    name: 'thumbnail_vampire_the_masquerade_bloodlines_ccbb94ccf7.jpg',
                    path: null,
                    size: 6.79,
                    width: 245,
                    height: 95
                  }
                }
              }
            },
            {
              documentId: '1',
              name: 'Wasteland 3 Colorado Collection ',
              price: 49,
              cover: {
                formats: {
                  large: {
                    ext: '.jpg',
                    url: '/uploads/large_wasteland_3_colorado_collection_fcbc522edb_f447fafd45.jpg',
                    hash: 'large_wasteland_3_colorado_collection_fcbc522edb_f447fafd45',
                    mime: 'image/jpeg',
                    name: 'large_wasteland_3_colorado_collection_fcbc522edb.jpg',
                    path: null,
                    size: 68.8,
                    width: 1000,
                    height: 390
                  },
                  small: {
                    ext: '.jpg',
                    url: '/uploads/small_wasteland_3_colorado_collection_fcbc522edb_f447fafd45.jpg',
                    hash: 'small_wasteland_3_colorado_collection_fcbc522edb_f447fafd45',
                    mime: 'image/jpeg',
                    name: 'small_wasteland_3_colorado_collection_fcbc522edb.jpg',
                    path: null,
                    size: 22.01,
                    width: 500,
                    height: 195
                  },
                  medium: {
                    ext: '.jpg',
                    url: '/uploads/medium_wasteland_3_colorado_collection_fcbc522edb_f447fafd45.jpg',
                    hash: 'medium_wasteland_3_colorado_collection_fcbc522edb_f447fafd45',
                    mime: 'image/jpeg',
                    name: 'medium_wasteland_3_colorado_collection_fcbc522edb.jpg',
                    path: null,
                    size: 42.94,
                    width: 750,
                    height: 292
                  },
                  thumbnail: {
                    ext: '.jpg',
                    url: '/img/test/product.jpg',
                    hash: 'thumbnail_wasteland_3_colorado_collection_fcbc522edb_f447fafd45',
                    mime: 'image/jpeg',
                    name: 'thumbnail_wasteland_3_colorado_collection_fcbc522edb.jpg',
                    path: null,
                    size: 6.71,
                    width: 245,
                    height: 95
                  }
                }
              }
            }
          ]
        }
      ]
    }
  }
}
