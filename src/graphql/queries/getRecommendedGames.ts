import { gql } from '@apollo/client'
import { GameRelationFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const GET_RECOMMENDED_GAMES = gql`
  query getRecommendedGames {
    recommended {
      data {
        attributes {
          showcase {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              ...GameRelationFragment
            }
          }
        }
      }
    }
  }

  ${HighlightFragment}
  ${GameRelationFragment}
`
