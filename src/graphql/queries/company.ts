import { gql } from '@apollo/client'

export const COMPANY = gql`
  query Company {
    company {
      data {
        attributes {
          name
          email
          phone
          street
          number
          neighborhood
          city
          zipcode
          state
          country
          complement
          logoLight {
            data {
              attributes {
                url
                width
                height
                formats
              }
            }
          }
          logoDark {
            data {
              attributes {
                url
                width
                height
                formats
              }
            }
          }
          socialLinks {
            name
            url
          }
        }
      }
    }
  }
`
