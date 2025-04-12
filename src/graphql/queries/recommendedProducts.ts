import { gql } from '@apollo/client'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT_RELATION } from 'graphql/fragments/product'

export const RECOMMENDED_PRODUCTS = gql`
  query RecommendedProducts {
    recommended {
      data {
        attributes {
          title
          highlight {
            ...highlight
          }
          products {
            ...productRelation
          }
        }
      }
    }
  }

  ${HIGHLIGHT}
  ${PRODUCT_RELATION}
`
