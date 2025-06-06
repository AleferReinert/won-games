import { gql } from '@apollo/client'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT_RELATION } from 'graphql/fragments/product'

export const RECOMMENDED_PRODUCTS = gql`
  ${HIGHLIGHT}
  ${PRODUCT_RELATION}
  query RecommendedProducts {
    recommended {
      title
      highlight {
        ...highlight
      }
      products {
        ...productRelation
      }
    }
  }
`
