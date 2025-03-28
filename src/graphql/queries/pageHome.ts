import { gql } from '@apollo/client'
import { BANNER } from 'graphql/fragments/banner'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT_ENTITY } from 'graphql/fragments/product'

export const PAGE_HOME = gql`
  query PageHome($currentDate: Date!) {
    banners {
      ...banner
    }
    newGames: games(
      filters: { release_date: { lte: $currentDate } }
      sort: "release_date:desc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...product
    }
    comingSoonGames: games(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...product
    }
    freeGames: games(filters: { price: { eq: 0 } }, sort: "release_date:desc", pagination: { start: 0, limit: 8 }) {
      ...product
    }
    showcases: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...highlight
            }
          }
          mostPopularGames {
            title
            highlight {
              ...highlight
            }
            games {
              data {
                id
                attributes {
                  name
                  slug
                  price
                  developers {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  cover {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          }
          comingSoonGames {
            title
            highlight {
              ...highlight
            }
          }
          freeGames {
            title
            highlight {
              ...highlight
            }
          }
        }
      }
    }
  }
  ${BANNER}
  ${PRODUCT_ENTITY}
  ${HIGHLIGHT}
`
