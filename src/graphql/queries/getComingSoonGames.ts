import { gql } from '@apollo/client'
import { GameEntityFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const GET_COMING_SOON_GAMES = gql`
  query getComingSoonGames($currentDate: Date!) {
    comingSoonGames: games(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...GameEntityFragment
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
  ${GameEntityFragment}
  ${HighlightFragment}
`
