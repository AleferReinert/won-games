import { fn } from '@storybook/test'
import { FilterContextProps } from 'contexts/FilterContext'
import { filterMock } from './filter.mock'

export const filterContextMock: FilterContextProps = {
  clearFilterSession: fn(),
  handleChange: fn(),
  handleFilter: fn(),
  removeFilterOption: fn(),
  removeSearchParam: fn(),
  selectedFilters: {},
  setSelectedFilters: fn(),
  urlQueryParams: { search: 'gta', price: '50', categories: ['action', 'adventure'], platforms: ['linux', 'mac'] },
  filterOptions: filterMock
}
