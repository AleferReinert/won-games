import { GET_ALL_PRODUCTS } from 'graphql/queries/getAllProducts'

export const mockProducts = {
  request: {
    query: GET_ALL_PRODUCTS,
    variables: {
      limit: 3,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              cover: {
                data: null,
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'The Legend of Zelda: Breath of the Wild',
              price: 24,
              slug: 'the-legend-of-zelda-breath-of-the-wild',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          },
          {
            attributes: {
              cover: {
                data: null,
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'God of War',
              price: 30,
              slug: 'god-of-war',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          },
          {
            attributes: {
              cover: {
                data: null,
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'Elden Ring',
              price: 50,
              slug: 'elden-ring',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          }
        ],
        meta: {
          pagination: {
            total: 6
          }
        },
        __typename: 'GameEntityResponseCollection'
      }
    }
  }
}

export const mockMoreGames = {
  request: {
    query: GET_ALL_PRODUCTS,
    variables: {
      limit: 3,
      start: 3,
      filters: { price: {}, and: [] }
    }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              cover: {
                data: null,
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'Cyberpunk 2077',
              price: 24,
              slug: 'cyberpunk-2077',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          },
          {
            attributes: {
              cover: {
                data: null,
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'Red Dead Redemption 2',
              price: 40,
              slug: 'red-dead-redemption-2',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          },
          {
            attributes: {
              cover: {
                data: null,
                __typename: 'UploadFileEntityResponse'
              },
              developers: {
                data: [],
                __typename: 'DeveloperRelationResponseCollection'
              },
              name: 'Horizon Zero Dawn',
              price: 35,
              slug: 'horizon-zero-dawn',
              __typename: 'Game'
            },
            __typename: 'GameEntity'
          }
        ],
        meta: {
          pagination: {
            total: 6
          }
        },
        __typename: 'GameEntityResponseCollection'
      }
    }
  }
}
