import { CompanyContextProps } from 'contexts/CompanyContext'

export const companyContextMock: CompanyContextProps = {
  name: 'Won Games',
  email: 'support@wongames.com',
  phone: '16104333002',
  street: 'Maple Street',
  number: '1325',
  neighborhood: 'Downtown',
  city: 'Chicago',
  zipcode: '62701',
  state: 'IL',
  country: 'United States',
  complement: 'Apartment 5A',
  logoIcon: {
    url: '/img/test/logo-icon.webp',
    width: 369,
    height: 234
  },
  logoLight: {
    url: '/img/test/logo-light.webp',
    width: 972,
    height: 288
  },
  logoDark: {
    url: '/img/test/logo-dark.webp',
    width: 972,
    height: 288
  },
  socialLinks: [
    {
      name: 'Facebook',
      url: 'https://facebook.com/example'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/example'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/example'
    }
  ]
}
