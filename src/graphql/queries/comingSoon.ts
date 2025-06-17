import { gql } from '@apollo/client'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT } from 'graphql/fragments/product'

export const COMING_SOON = gql`
  ${PRODUCT}
  ${HIGHLIGHT}

  query ComingSoon($currentDate: Date!) {
    comingSoonProducts: products(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...product
    }
    showcase: home {
      comingSoonProducts {
        title
        highlight {
          ...highlight
        }
      }
    }
  }
`
