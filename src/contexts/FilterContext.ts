import { FilterOptionsProps } from 'components/Filter/Filter'
import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring'
import { createContext, Dispatch, SetStateAction } from 'react'

export interface FilterContextProps {
  urlQueryParams: ParsedUrlQuery
  filterOptions: FilterOptionsProps[]
  selectedFilters: ParsedUrlQueryInput
  setSelectedFilters: Dispatch<SetStateAction<ParsedUrlQueryInput>>
  handleFilter: () => void
  clearFilterSession: (sessionName: FilterOptionsProps['name']) => void
  removeFilterOption: (key: string, value: string) => void
  removeSearchParam: () => void
  handleChange: (name: string, value: string) => void
}

export const FilterContextDefaultValues: FilterContextProps = {
  urlQueryParams: {},
  filterOptions: [],
  selectedFilters: {},
  setSelectedFilters: () => {},
  handleFilter: () => {},
  clearFilterSession: () => {},
  removeFilterOption: () => {},
  removeSearchParam: () => {},
  handleChange: () => {}
}

export const FilterContext = createContext<FilterContextProps>(FilterContextDefaultValues)
