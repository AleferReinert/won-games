import { COMPANY } from 'graphql/queries/company'
import { CompanyQuery } from 'types/generated'
import { initializeApollo } from './apollo'

export interface CompanyProps {
  name: string
  description: string
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
  if (error || !data.company) {
    console.error('Error loading company:', error)
    throw new Error('Error loading company')
  }
  return {
    ...data.company,
    logoIcon: {
      ...data.company.logoIcon,
      width: data.company.logoIcon.width ?? 0,
      height: data.company.logoIcon.height ?? 0
    },
    logoLight: {
      ...data.company.logoLight,
      width: data.company.logoLight.width ?? 0,
      height: data.company.logoLight.height ?? 0
    },
    logoDark: {
      ...data.company.logoDark,
      width: data.company.logoDark.width ?? 0,
      height: data.company.logoDark.height ?? 0
    },
    socialLinks: data.company.socialLinks ?? []
  }
}
