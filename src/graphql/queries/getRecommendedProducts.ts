import { gql } from '@apollo/client'
import { HighlightFragment } from 'graphql/fragments/highlight'
import { ProductRelationFragment } from 'graphql/fragments/product'

export const GET_RECOMMENDED_PRODUCTS = gql`
  query getRecommendedProducts {
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
  ${ProductRelationFragment}
`
