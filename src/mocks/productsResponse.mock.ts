import { MockedResponse } from '@apollo/client/testing'
import { PRODUCTS } from 'graphql/queries/products'
import { productsLimit } from 'pages/products'
import { Enum_Product_Rating, ProductEntityResponseCollection } from 'types/generated'

export const productsResponseMock: MockedResponse<{
  products: ProductEntityResponseCollection
}> = {
  request: {
    query: PRODUCTS,
    variables: {
      limit: productsLimit,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      products: {
        data: [
          {
            id: '1',
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
              name: 'The Legend of Zelda: Breath of the Wild',
              price: 24,
              slug: 'the-legend-of-zelda-breath-of-the-wild',
              description: 'The Legend of Zelda: Breath of the Wild',
              short_description: 'The Legend of Zelda: Breath of the Wild',
              createdAt: '2024-03-15T12:30:00.000Z',
              publishedAt: '2024-03-15T12:30:00.000Z',
              categories: { data: [] },
              platforms: { data: [] },
              gallery: { data: [] },
              publisher: {
                __typename: 'PublisherEntityResponse',
                data: {
                  id: '1',
                  attributes: {
                    createdAt: '2024-03-15T12:30:00.000Z',
                    publishedAt: '2024-03-15T12:30:00.000Z',
                    updatedAt: '2024-03-15T12:30:00.000Z',
                    products: { data: [] },
                    name: 'Nintendo',
                    slug: 'nintendo'
                  }
                }
              },
              rating: Enum_Product_Rating.Br18,
              release_date: '2024-03-15T12:30:00.000Z',
              updatedAt: '2024-03-15T12:30:00.000Z',
              __typename: 'Product'
            },
            __typename: 'ProductEntity'
          },
          {
            id: '2',
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
              name: 'God of War',
              price: 30,
              slug: 'god-of-war',
              description: 'God of War',
              short_description: 'God of War',
              createdAt: '2024-03-15T12:30:00.000Z',
              publishedAt: '2024-03-15T12:30:00.000Z',
              categories: { data: [] },
              platforms: { data: [] },
              gallery: { data: [] },
              publisher: {
                __typename: 'PublisherEntityResponse',
                data: {
                  id: '2',
                  attributes: {
                    createdAt: '2024-03-15T12:30:00.000Z',
                    publishedAt: '2024-03-15T12:30:00.000Z',
                    updatedAt: '2024-03-15T12:30:00.000Z',
                    products: { data: [] },
                    name: 'Nintendo',
                    slug: 'nintendo'
                  }
                }
              },
              rating: Enum_Product_Rating.Br18,
              release_date: '2024-03-15T12:30:00.000Z',
              updatedAt: '2024-03-15T12:30:00.000Z',
              __typename: 'Product'
            },
            __typename: 'ProductEntity'
          },
          {
            id: '3',
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
              name: 'Elden Ring',
              price: 50,
              slug: 'elden-ring',
              description: 'Elden Ring',
              short_description: 'Elden Ring',
              createdAt: '2024-03-15T12:30:00.000Z',
              publishedAt: '2024-03-15T12:30:00.000Z',
              categories: { data: [] },
              platforms: { data: [] },
              gallery: { data: [] },
              publisher: {
                __typename: 'PublisherEntityResponse',
                data: {
                  id: '3',
                  attributes: {
                    createdAt: '2024-03-15T12:30:00.000Z',
                    publishedAt: '2024-03-15T12:30:00.000Z',
                    updatedAt: '2024-03-15T12:30:00.000Z',
                    products: { data: [] },
                    name: 'Nintendo',
                    slug: 'nintendo'
                  }
                }
              },
              rating: Enum_Product_Rating.Br18,
              release_date: '2024-03-15T12:30:00.000Z',
              updatedAt: '2024-03-15T12:30:00.000Z',
              __typename: 'Product'
            },
            __typename: 'ProductEntity'
          }
        ],
        meta: {
          pagination: {
            page: 1,
            pageCount: 4,
            pageSize: 3,
            total: 6
          }
        },
        __typename: 'ProductEntityResponseCollection'
      }
    }
  }
}
