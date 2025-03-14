import { gql } from '@apollo/client'
import { HighlightFragment } from 'graphql/fragments/highlight'
import { ProductEntityFragment } from 'graphql/fragments/product'

export const GET_COMING_SOON_PRODUCTS = gql`
  query getComingSoonProducts($currentDate: Date!) {
    comingSoonGames: games(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...ProductEntityFragment
    }
    showcase: home {
      data {
        attributes {
          comingSoonGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
  ${ProductEntityFragment}
  ${HighlightFragment}
`
