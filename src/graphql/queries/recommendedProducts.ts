import { gql } from '@apollo/client'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT_RELATION } from 'graphql/fragments/product'

export const RECOMMENDED_PRODUCTS = gql`
  query RecommendedProducts {
    recommended {
      data {
        attributes {
          showcase {
            title
            highlight {
              ...highlight
            }
            games {
              ...product
            }
          }
        }
      }
    }
  }

  ${HIGHLIGHT}
  ${PRODUCT_RELATION}
`
