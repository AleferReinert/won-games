import { GET_ALL_GAMES } from 'graphql/queries/getAllGames'
import { productsLimit } from '.'

export const mockGames = {
  request: {
    query: GET_ALL_GAMES,
    variables: {
      limit: productsLimit
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
          }
        ],
        __typename: 'GameEntityResponseCollection'
      }
    }
  }
}

export const mockMoreGames = {
  request: {
    query: GET_ALL_GAMES,
    variables: {
      start: 1,
      limit: productsLimit
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
          }
        ],
        __typename: 'GameEntityResponseCollection'
      }
    }
  }
}
