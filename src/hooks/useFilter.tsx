import { useQuery } from '@apollo/client'
import { FilterOptionsProps } from 'components/Filter/Filter'
import { FilterContext, FilterContextDefaultValues, FilterContextProps } from 'contexts/FilterContext'
import { CATEGORIES } from 'graphql/queries/categories'
import { PLATFORMS } from 'graphql/queries/platforms'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { ReactNode, useContext, useMemo, useState } from 'react'
import { CategoriesQuery, PlatformsQuery } from 'types/generated'
import { generateFilterOptions } from 'utils/filterOptions'

interface FilterProviderProps {
  children: ReactNode
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const { query, push } = useRouter()
  const { data: platforms } = useQuery<PlatformsQuery>(PLATFORMS)
  const { data: categories } = useQuery<CategoriesQuery>(CATEGORIES)
  const filterOptions = platforms && categories && generateFilterOptions({ platforms, categories })
  const search = query['search']?.toString()

  const initialValuesFormatted = useMemo(() => {
    const formattedQuery: ParsedUrlQueryInput = { ...query }
    const platformsArray = query['platforms']?.toString()?.split(',')
    const categoriesArray = query['categories']?.toString()?.split(',')

    if (platformsArray) formattedQuery['platforms'] = platformsArray
    if (categoriesArray) formattedQuery['categories'] = categoriesArray
    if (search) formattedQuery.search = search

    return formattedQuery
  }, [query, search])
  const [selectedFilters, setSelectedFilters] = useState(initialValuesFormatted)
  const handleChange = (name: string, value: string) => {
    // If checked, update url, if unchecked, remove from url
    if (name === 'platforms') {
      setSelectedFilters((s) => {
        const platforms = s[name] ? [...(s[name] as string[])] : []
        const platform = value.toString()

        if (platforms.includes(platform)) {
          const updatedPlatforms = platforms.filter((item) => item !== platform)
          return { ...s, [name]: updatedPlatforms }
        } else {
          platforms.push(platform)
          return { ...s, [name]: platforms }
        }
      })
      return
    }

    if (name === 'categories') {
      setSelectedFilters((s) => {
        const categories = s[name] ? [...(s[name] as string[])] : []
        const category = value.toString()

        if (categories.includes(category)) {
          const updatedCategories = categories.filter((item) => item !== category)
          return { ...s, [name]: updatedCategories }
        } else {
          categories.push(category)
          return { ...s, [name]: categories }
        }
      })
      return
    }

    if (name === 'price' || name === 'sort') {
      if (value) {
        setSelectedFilters((s) => ({ ...s, [name]: value }))
      } else {
        setSelectedFilters((s) => {
          delete { ...s }[name]
          return { ...s }
        })
      }
    }
  }

  const handleFilter = () => {
    const isEmptyValue = (value: unknown): boolean => {
      return !value || (Array.isArray(value) && !value.length) || (typeof value === 'string' && value.trim() === '')
    }

    const formatFilters = (filters: Record<string, unknown>): Record<string, string> => {
      return Object.entries(filters).reduce(
        (acc, [key, value]) => {
          if (isEmptyValue(value)) return acc
          acc[key] = Array.isArray(value) ? value.join(',') : String(value)
          return acc
        },
        {} as Record<string, string>
      )
    }

    const formattedFilters = selectedFilters ? formatFilters(selectedFilters) : {}
    if (search) formattedFilters.search = search

    push({
      pathname: '/products',
      query: formattedFilters
    })
  }
  const removeFilterOption = (key: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters }
      const filterValues = updatedFilters[key]

      if (Array.isArray(filterValues)) {
        const updatedValues = filterValues.filter((item) => item !== value)
        if (updatedValues.length > 0) {
          updatedFilters[key] = updatedValues
        } else {
          delete updatedFilters[key]
        }
      } else if (filterValues === value) {
        delete updatedFilters[key]
      }

      return updatedFilters
    })
  }
  const removeSearchParam = () => {
    setSelectedFilters((currentFilters) => {
      const updatedFilters = { ...currentFilters }
      delete updatedFilters.search
      return updatedFilters
    })
    const { ...remainingFilters } = selectedFilters || {}
    push({
      pathname: '/products',
      query: remainingFilters
    })
  }
  const clearFilterSession = (sessionName: FilterOptionsProps['name']) => {
    setSelectedFilters((currentFilters) => {
      const updatedValues = { ...currentFilters }
      delete updatedValues[sessionName]
      return updatedValues
    })
  }

  return (
    <FilterContext.Provider
      value={{
        urlQueryParams: query,
        filterOptions: filterOptions || [],
        selectedFilters,
        setSelectedFilters,
        handleFilter,
        clearFilterSession,
        removeFilterOption,
        removeSearchParam,
        handleChange
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = (): FilterContextProps => {
  return useContext(FilterContext) || FilterContextDefaultValues
}
