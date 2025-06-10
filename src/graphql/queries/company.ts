import { gql } from '@apollo/client'

export const COMPANY = gql`
  query Company {
    company {
      name
      description
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
        url
        width
        height
        formats
      }
      logoDark {
        url
        width
        height
      }
      logoIcon {
        url
        width
        height
      }
      socialLinks {
        name
        url
      }
    }
  }
`
