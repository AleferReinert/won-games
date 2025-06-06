import { FilterOptionsProps } from 'components/Filter/Filter'
import { CategoriesQuery, PlatformsQuery } from 'types/generated'

interface generateFilterOptionsProps {
  platforms: PlatformsQuery
  categories: CategoriesQuery
}

export const generateFilterOptions = ({ platforms, categories }: generateFilterOptionsProps): FilterOptionsProps[] => [
  {
    title: 'Price',
    name: 'price',
    type: 'radio',
    fields: [
      { label: 'Under $50', id: 'under-50', value: '50' },
      { label: 'Under $100', id: 'under-100', value: '100' },
      { label: 'Under $150', id: 'under-150', value: '150' },
      { label: 'Under $200', id: 'under-200', value: '200' },
      { label: 'Free', id: 'free', value: '0' }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort',
    type: 'radio',
    fields: [
      {
        label: 'Low to high',
        id: 'low-to-high',
        value: 'price:asc'
      },
      {
        label: 'High to low',
        id: 'high-to-low',
        value: 'price:desc'
      }
    ]
  },
  {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields:
      platforms.platforms.map(({ name, slug }) => ({
        label: name,
        id: slug,
        value: slug
      })) || []
  },
  {
    title: 'Categories',
    name: 'categories',
    type: 'checkbox',
    fields:
      categories.categories.map(({ name, slug }) => ({
        label: name,
        id: slug,
        value: slug
      })) || []
  }
]
