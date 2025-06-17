import { gql } from '@apollo/client'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT } from 'graphql/fragments/product'

export const RECOMMENDED_PRODUCTS = gql`
  ${HIGHLIGHT}
  ${PRODUCT}
  query RecommendedProducts {
    recommended {
      title
      highlight {
        ...highlight
      }
      products {
        ...product
      }
    }
  }
`
