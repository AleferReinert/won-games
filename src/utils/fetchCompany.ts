import { COMPANY } from 'graphql/queries/company'
import { CompanyQuery } from 'types/generated'
import { initializeApollo } from './apollo'
import { companyMapper } from './mappers'

export interface CompanyProps {
  name: string
  email: string
  phone: string
  street: string
  number: string
  neighborhood: string
  city: string
  zipcode: string
  state: string
  country: string
  complement?: string
  logoIcon: {
    url: string
    width: number
    height: number
  }
  logoLight: {
    url: string
    width: number
    height: number
  }
  logoDark: {
    url: string
    width: number
    height: number
  }
  socialLinks: {
    name: string
    url: string
  }[]
}

export async function fetchCompany(): Promise<CompanyProps> {
  const apolloClient = initializeApollo()
  const { data, error } = await apolloClient.query<CompanyQuery>({
    query: COMPANY
  })
  if (error || !data) {
    console.error('Error loading company:', error)
    throw new Error('Error loading company')
  }
  return companyMapper(data)
}
