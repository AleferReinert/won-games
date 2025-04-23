import { fn } from '@storybook/test'
import { WishlistContextProps } from 'contexts/WishlistContext'
import { Enum_Product_Rating } from 'types/generated'

export const wishlistContextMock: WishlistContextProps = {
  products: [
    {
      id: '1',
      attributes: {
        cover: {
          data: {
            id: '1',
            attributes: {
              name: 'cover-image.jpg',
              url: '/img/product-test.jpg',
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
        promotional_price: 10,
        ribbon_label: 'Best Seller',
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
    }
  ],
  isInWishlist: (id: string) => ['1'].includes(id),
  addToWishlist: fn(() => Promise.resolve({})),
  removeFromWishlist: fn(() => Promise.resolve({})),
  loading: false
}
