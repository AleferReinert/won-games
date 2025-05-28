import { ProductProps } from '../components/Product/Product'

export const productMock: ProductProps = {
  id: '1',
  title: 'Population Zero',
  developer: 'Other Ocean',
  cover: {
    url: '/img/test/product.jpg',
    alternativeText: 'Game cover image'
  },
  price: 215.0,
  slug: 'population-zero'
}
