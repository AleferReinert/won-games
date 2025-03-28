import { gql } from '@apollo/client'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT_ENTITY } from 'graphql/fragments/product'

export const COMING_SOON = gql`
  query ComingSoon($currentDate: Date!) {
    comingSoonGames: games(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...product
    }
    showcase: home {
      data {
        attributes {
          comingSoonGames {
            title
            highlight {
              ...highlight
            }
          }
        }
      }
    }
  }
  ${PRODUCT_ENTITY}
  ${HIGHLIGHT}
`
