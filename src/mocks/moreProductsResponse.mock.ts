import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'
import { productsLimit } from 'pages/products'
import { Enum_Game_Rating, GameEntityResponseCollection } from 'types/generated'

export const moreProductsResponseMock: MockedResponse<{
  games: GameEntityResponseCollection
}> = {
  request: {
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      start: 3,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: '4',
            attributes: {
              cover: {
                data: {
                  id: '1',
                  attributes: {
                    name: 'cover-image.jpg',
                    url: '/uploads/cover-image.jpg',
                    alternativeText: 'Imagem de capa do jogo',
                    caption: 'Capa do jogo',
                    createdAt: '2022-01-01T00:00:00.000Z',
                    ext: '.jpg',
                    formats: {
                      thumbnail: {
                        url: 'https://example.com/thumbnail.jpg'
                      }
                    },
                    hash: '1234567890',
                    height: 100,
                    mime: 'image/jpeg',
                    size: 1024,
                    width: 100,
                    provider: 'local',
                    previewUrl: 'https://example.com/preview.jpg',
                    provider_metadata: {},
                    related: [],
                    updatedAt: '2022-01-01T00:00:00.000Z',
                    __typename: 'UploadFile'
                  }
                },
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'Cyberpunk 2077',
              price: 24,
              slug: 'cyberpunk-2077',
              description: 'Cyberpunk 2077',
              short_description: 'Cyberpunk 2077',
              createdAt: '2024-03-15T12:30:00.000Z',
              publishedAt: '2024-03-15T12:30:00.000Z',
              categories: { data: [] },
              platforms: { data: [] },
              gallery: { data: [] },
              publisher: {
                __typename: 'PublisherEntityResponse',
                data: {
                  id: '4',
                  attributes: {
                    createdAt: '2024-03-15T12:30:00.000Z',
                    publishedAt: '2024-03-15T12:30:00.000Z',
                    updatedAt: '2024-03-15T12:30:00.000Z',
                    games: { data: [] },
                    name: 'Nintendo',
                    slug: 'nintendo'
                  }
                }
              },
              rating: Enum_Game_Rating.Br18,
              release_date: '2024-03-15T12:30:00.000Z',
              updatedAt: '2024-03-15T12:30:00.000Z',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          },
          {
            id: '5',
            attributes: {
              cover: {
                data: {
                  id: '1',
                  attributes: {
                    name: 'cover-image.jpg',
                    url: '/uploads/cover-image.jpg',
                    alternativeText: 'Imagem de capa do jogo',
                    caption: 'Capa do jogo',
                    createdAt: '2022-01-01T00:00:00.000Z',
                    ext: '.jpg',
                    formats: {
                      thumbnail: {
                        url: 'https://example.com/thumbnail.jpg'
                      }
                    },
                    hash: '1234567890',
                    height: 100,
                    mime: 'image/jpeg',
                    size: 1024,
                    width: 100,
                    provider: 'local',
                    previewUrl: 'https://example.com/preview.jpg',
                    provider_metadata: {},
                    related: [],
                    updatedAt: '2022-01-01T00:00:00.000Z',
                    __typename: 'UploadFile'
                  }
                },
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'Red Dead Redemption 2',
              price: 40,
              slug: 'red-dead-redemption-2',
              description: 'Red Dead Redemption 2',
              short_description: 'Red Dead Redemption 2',
              createdAt: '2024-03-15T12:30:00.000Z',
              publishedAt: '2024-03-15T12:30:00.000Z',
              categories: { data: [] },
              platforms: { data: [] },
              gallery: { data: [] },
              publisher: {
                __typename: 'PublisherEntityResponse',
                data: {
                  id: '5',
                  attributes: {
                    createdAt: '2024-03-15T12:30:00.000Z',
                    publishedAt: '2024-03-15T12:30:00.000Z',
                    updatedAt: '2024-03-15T12:30:00.000Z',
                    games: { data: [] },
                    name: 'Nintendo',
                    slug: 'nintendo'
                  }
                }
              },
              rating: Enum_Game_Rating.Br18,
              release_date: '2024-03-15T12:30:00.000Z',
              updatedAt: '2024-03-15T12:30:00.000Z',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          },
          {
            id: '6',
            attributes: {
              cover: {
                data: {
                  id: '1',
                  attributes: {
                    name: 'cover-image.jpg',
                    url: '/uploads/cover-image.jpg',
                    alternativeText: 'Imagem de capa do jogo',
                    caption: 'Capa do jogo',
                    createdAt: '2022-01-01T00:00:00.000Z',
                    ext: '.jpg',
                    formats: {
                      thumbnail: {
                        url: 'https://example.com/thumbnail.jpg'
                      }
                    },
                    hash: '1234567890',
                    height: 100,
                    mime: 'image/jpeg',
                    size: 1024,
                    width: 100,
                    provider: 'local',
                    previewUrl: 'https://example.com/preview.jpg',
                    provider_metadata: {},
                    related: [],
                    updatedAt: '2022-01-01T00:00:00.000Z',
                    __typename: 'UploadFile'
                  }
                },
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'Horizon Zero Dawn',
              price: 35,
              slug: 'horizon-zero-dawn',
              description: 'Horizon Zero Dawn',
              short_description: 'Horizon Zero Dawn',
              createdAt: '2024-03-15T12:30:00.000Z',
              publishedAt: '2024-03-15T12:30:00.000Z',
              categories: { data: [] },
              platforms: { data: [] },
              gallery: { data: [] },
              publisher: {
                __typename: 'PublisherEntityResponse',
                data: {
                  id: '6',
                  attributes: {
                    createdAt: '2024-03-15T12:30:00.000Z',
                    publishedAt: '2024-03-15T12:30:00.000Z',
                    updatedAt: '2024-03-15T12:30:00.000Z',
                    games: { data: [] },
                    name: 'Nintendo',
                    slug: 'nintendo'
                  }
                }
              },
              rating: Enum_Game_Rating.Br18,
              release_date: '2024-03-15T12:30:00.000Z',
              updatedAt: '2024-03-15T12:30:00.000Z',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          }
        ],
        meta: {
          pagination: {
            page: 2,
            pageCount: 4,
            pageSize: 3,
            total: 6
          }
        },
        __typename: 'GameEntityResponseCollection'
      }
    }
  }
}
