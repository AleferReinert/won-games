import { Close as CloseIcon, FilterList as FilterListIcon } from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import Checkbox from 'components/Checkbox/Checkbox'
import Heading from 'components/Heading/Heading'
import Radio from 'components/Radio/Radio'
import { useFilter } from 'hooks/useFilter'
import { useEffect, useState } from 'react'
import * as S from './Filter.styles'

export interface FilterOptionsProps {
  title: string
  name: 'price' | 'sort' | 'platforms' | 'categories'
  type: 'radio' | 'checkbox'
  fields: {
    label: string
    id: string
    value: string
  }[]
}

const Filter = () => {
  const { filterOptions, selectedFilters, clearFilterSession, handleFilter, handleChange } = useFilter()
  const [$isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    handleFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters])

  return (
    <>
      <S.OpenFilter onClick={() => setIsOpen(true)} title='Open filters' aria-label='Open filters'>
        <FilterListIcon role='img' aria-hidden='true' />
      </S.OpenFilter>

      <S.Wrapper $isOpen={$isOpen} data-testid='FilterComponent'>
        <S.CloseFilter onClick={() => setIsOpen(false)} title='Close filters' aria-label='Close filters'>
          <CloseIcon role='img' aria-hidden />
        </S.CloseFilter>
        <S.Items>
          {filterOptions.map((filter) => {
            const filterSessionChecked = Object.keys(selectedFilters).includes(filter.name)

            return (
              <S.Item key={filter.title}>
                <Heading $line='bottom' $lineColor='secondary' color='black' size='xlarge'>
                  {filter.title}
                </Heading>
                {filter.type === 'checkbox'
                  ? filter.fields?.map((field) => {
                      const arr = Array.isArray(selectedFilters[filter.name])
                        ? (selectedFilters[filter.name] as string[])
                        : []
                      const isChecked = arr.includes(field.value)

                      return (
                        <Checkbox
                          key={field.id}
                          id={field.id}
                          name={filter.name}
                          label={field.label}
                          value={field.value}
                          $labelColor='black'
                          checked={isChecked}
                          onCheck={() => handleChange(filter.name, field.value)}
                        />
                      )
                    })
                  : filter.fields?.map((field) => (
                      <Radio
                        key={field.id}
                        id={field.id}
                        name={filter.name}
                        label={field.label}
                        value={field.value}
                        $labelColor='black'
                        checked={String(selectedFilters[filter.name] ?? '') === String(field.value)}
                        onChange={() => handleChange(filter.name, field.value)}
                      />
                    ))}
                {filterSessionChecked && (
                  <S.ClearFilter>
                    <button onClick={() => clearFilterSession(filter.name)}>Clear</button>
                  </S.ClearFilter>
                )}
              </S.Item>
            )
          })}
        </S.Items>
        <S.ButtonWrapper>
          <Button $full size='large' onClick={handleFilter}>
            Filter
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  )
}

export default Filter
