import { useQuery } from '@apollo/client'
import { Loading } from 'components/Loading/Loading'
import { COMPANY } from 'graphql/queries/company'
import { createContext, ReactNode } from 'react'
import theme from 'styles/theme'
import { CompanyQuery } from 'types/generated'
import { companyMapper } from 'utils/mappers'

export interface CompanyContextProps {
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

interface CompanyProviderProps {
  children: ReactNode
}

const CompanyContextDefaultValues: CompanyContextProps = {
  name: 'Won Games',
  email: '',
  phone: '',
  street: '',
  number: '',
  neighborhood: '',
  city: '',
  zipcode: '',
  state: '',
  country: '',
  complement: '',
  logoIcon: {
    url: '',
    width: 0,
    height: 0
  },
  logoLight: {
    url: '',
    width: 0,
    height: 0
  },
  logoDark: {
    url: '',
    width: 0,
    height: 0
  },
  socialLinks: []
}

export const CompanyContext = createContext<CompanyContextProps>(CompanyContextDefaultValues)

export const CompanyProvider = ({ children }: CompanyProviderProps) => {
  const { data, error, loading } = useQuery<CompanyQuery>(COMPANY)

  if (loading)
    return (
      <div
        style={{
          backgroundColor: theme.colors.darkBg,
          position: 'fixed',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Loading animation='spinner' color={theme.colors.primary} size={80} />
      </div>
    )
  if (error || !data) {
    console.error('Error loading company:', error)
    throw new Error('Error loading company')
  }
  const company = companyMapper(data)
  return <CompanyContext.Provider value={company}>{children}</CompanyContext.Provider>
}
