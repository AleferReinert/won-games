import { gql } from '@apollo/client'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT_ENTITY } from 'graphql/fragments/product'

export const COMING_SOON = gql`
  ${PRODUCT_ENTITY}
  ${HIGHLIGHT}
  query ComingSoon($currentDate: Date!) {
    comingSoonProducts: products(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...productEntity
    }
    showcase: home {
      data {
        attributes {
          comingSoonProducts {
            title
            highlight {
              ...highlight
            }
          }
        }
      }
    }
  }
`
