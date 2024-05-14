import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameEntityFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const GET_PAGE_HOME = gql`
  query getPageHome($currentDate: Date!) {
    banners {
      ...BannerFragment
    }
    newGames: games(
      filters: { release_date: { lte: $currentDate } }
      sort: "release_date:desc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...GameEntityFragment
    }
    comingSoonGames: games(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...GameEntityFragment
    }
    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...GameEntityFragment
    }
    showcases: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          mostPopularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
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
              ...HighlightFragment
            }
          }
          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
  ${BannerFragment}
  ${GameEntityFragment}
  ${HighlightFragment}
`
