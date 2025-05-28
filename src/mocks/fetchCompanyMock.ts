import { CompanyProps } from 'utils/fetchCompany'

export async function fetchCompany(): Promise<CompanyProps> {
  return Promise.resolve({
    name: 'Mock Company',
    email: 'contato@mockcompany.com',
    phone: '+55 11 99999-9999',
    street: 'Rua Mock',
    number: '123',
    neighborhood: 'Bairro Mock',
    city: 'São Paulo',
    zipcode: '01234-567',
    state: 'SP',
    country: 'Brasil',
    complement: 'Sala 456',
    logoIcon: {
      url: '/mock/logo-icon.png',
      width: 40,
      height: 40
    },
    logoLight: {
      url: '/mock/logo-light.png',
      width: 120,
      height: 40
    },
    logoDark: {
      url: '/mock/logo-dark.png',
      width: 120,
      height: 40
    },
    socialLinks: [
      { name: 'facebook', url: 'https://facebook.com/mockcompany' },
      { name: 'twitter', url: 'https://twitter.com/mockcompany' },
      { name: 'linkedin', url: 'https://linkedin.com/company/mockcompany' }
    ]
  })
}
