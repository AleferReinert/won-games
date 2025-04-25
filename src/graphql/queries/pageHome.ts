import { gql } from '@apollo/client'
import { BANNER } from 'graphql/fragments/banner'
import { HIGHLIGHT } from 'graphql/fragments/highlight'
import { PRODUCT_ENTITY } from 'graphql/fragments/product'

export const PAGE_HOME = gql`
  query PageHome($currentDate: Date!) {
    banners {
      ...banner
    }
    newProducts: products(
      filters: { release_date: { lte: $currentDate } }
      sort: "release_date:desc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...productEntity
    }
    comingSoonProducts: products(
      filters: { release_date: { gt: $currentDate } }
      sort: "release_date:asc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...productEntity
    }
    freeProducts: products(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { start: 0, limit: 8 }
    ) {
      ...productEntity
    }
    showcases: home {
      data {
        attributes {
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
              data {
                id
                attributes {
                  name
                  slug
                  price
                  promotional_price
                  ribbon_label
                  developers {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  cover {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
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
    }
  }
  ${BANNER}
  ${PRODUCT_ENTITY}
  ${HIGHLIGHT}
`
