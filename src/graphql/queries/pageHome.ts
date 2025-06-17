import { gql } from '@apollo/client'
import { BANNER } from 'graphql/fragments/banner'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT } from 'graphql/fragments/product'

export const PAGE_HOME = gql`
  ${BANNER}
  ${PRODUCT}
  ${HIGHLIGHT}
  query PageHome($currentDate: Date!, $pastDate: Date!, $limit: Int!) {
    banners {
      ...banner
    }
    newProducts: products(
      filters: { release_date: { gte: $pastDate, lte: $currentDate } }
      sort: "release_date:desc"
      pagination: { start: 0, limit: $limit }
    ) {
      ...product
    }
    comingSoonProducts: products(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: $limit }
    ) {
      ...product
    }
    freeProducts: products(
      filters: { price: { eq: 0 } }
      sort: "createdAt:desc"
      pagination: { start: 0, limit: $limit }
    ) {
      ...product
    }
    showcases: home {
      newProducts {
        title
        highlight {
          ...highlight
        }
      }
      popularProducts {
        title
        highlight {
          ...highlight
        }
        products {
          documentId
          name
          slug
          price
          promotional_price
          ribbon_label
          developers {
            name
          }
          cover {
            url
            alternativeText
            formats
          }
        }
      }
      comingSoonProducts {
        title
        highlight {
          ...highlight
        }
      }
      freeProducts {
        title
        highlight {
          ...highlight
        }
      }
    }
  }
`
