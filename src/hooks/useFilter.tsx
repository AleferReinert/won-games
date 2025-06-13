'use client'
import { FilterOptionsProps } from 'components/Filter/Filter'
import { FilterContext, FilterContextDefaultValues, FilterContextProps } from 'contexts/FilterContext'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTopLoader } from 'nextjs-toploader'
import { ParsedUrlQueryInput } from 'querystring'
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react'

interface FilterProviderProps {
  children: ReactNode
  filterOptions: FilterOptionsProps[]
}

export const FilterProvider = ({ children, filterOptions }: FilterProviderProps) => {
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const router = useRouter()
  const searchParams = useSearchParams()
  const { start, done } = useTopLoader()

  const query: Record<string, string> = useMemo(() => {
    const obj: Record<string, string> = {}
    for (const [key, value] of searchParams.entries()) {
      obj[key] = value
    }
    return obj
  }, [searchParams])

  const initialValuesFormatted = useMemo(() => {
    const formattedQuery: ParsedUrlQueryInput = { ...query }
    const platformsArray = query['platforms']?.toString()?.split(',')
    const categoriesArray = query['categories']?.toString()?.split(',')

    if (platformsArray) formattedQuery['platforms'] = platformsArray
    if (categoriesArray) formattedQuery['categories'] = categoriesArray
    if (query['search']) formattedQuery.search = query['search']

    return formattedQuery
  }, [query])

  const [selectedFilters, setSelectedFilters] = useState<ParsedUrlQueryInput>(initialValuesFormatted)

  useEffect(() => {
    setSelectedFilters(initialValuesFormatted)
  }, [initialValuesFormatted])

  const handleChange = (name: string, value: string) => {
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
      setSelectedFilters((s) => {
        const newState = { ...s }
        if (value) {
          newState[name] = value
        } else {
          delete newState[name]
        }
        return newState
      })
    }

    if (name === 'search') {
      setSelectedFilters((s) => {
        const newState = { ...s }
        if (value) {
          newState[name] = value
        } else {
          delete newState[name]
        }
        return newState
      })
    }
  }

  const handleFilter = (filtersToApply?: Record<string, unknown>) => {
    const currentFilters = { ...(filtersToApply ?? selectedFilters) }

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

    const formattedFilters = currentFilters ? formatFilters(currentFilters) : {}
    const params = new URLSearchParams(formattedFilters)
    router.replace(`/explore?${params.toString()}`)
  }

  const removeFilterOption = (key: string, value: string) => {
    setSelectedFilters((prev) => {
      const next = { ...prev }
      const values = next[key]

      if (Array.isArray(values)) {
        const remaining = values.filter((v) => v !== value)
        if (remaining.length) {
          next[key] = remaining
        } else {
          delete next[key]
        }
      } else if (values === value) {
        delete next[key]
      }
      if (!isDesktop) handleFilter(next)
      return next
    })
  }

  const removeSearchParam = () => {
    setSelectedFilters((s) => {
      const updatedFilters = { ...s }
      delete updatedFilters.search
      return updatedFilters
    })
    if (!isDesktop) {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { search, ...rest } = selectedFilters
        handleFilter(rest)
      }, 0)
    }
  }

  const clearFilterSession = (sessionName: FilterOptionsProps['name']) => {
    setSelectedFilters((currentFilters) => {
      const updatedValues = { ...currentFilters }
      delete updatedValues[sessionName]
      return updatedValues
    })
  }

  useEffect(() => {
    if (isDesktop) {
      handleFilter(selectedFilters)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters, isDesktop])

  useEffect(() => {
    start()
    setTimeout(() => {
      done()
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

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
