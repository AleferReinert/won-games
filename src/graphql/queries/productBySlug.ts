import { gql } from '@apollo/client'

export const PRODUCT_BY_SLUG = gql`
  query ProductBySlug($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          cover {
            data {
              attributes {
                url
              }
            }
          }
          name
          short_description
          description
          price
          gallery {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          release_date
          platforms {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          rating
          categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
