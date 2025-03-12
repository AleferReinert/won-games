import {
  Close as CloseIcon,
  FilterList as FilterListIcon
} from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import Checkbox from 'components/Checkbox/Checkbox'
import Heading from 'components/Heading/Heading'
import Radio from 'components/Radio/Radio'
import { ParsedUrlQueryInput } from 'querystring'
import { useEffect, useState } from 'react'
import * as S from './Filter.styles'

export interface FilterOptionsProps {
  title: string
  name: string
  type: 'radio' | 'checkbox'
  fields: {
    label: string
    id: string
    value: string
  }[]
}

export type FilterProps = {
  filterOptions: FilterOptionsProps[]
  initialValues?: ParsedUrlQueryInput
  handleFilter: (values: ParsedUrlQueryInput) => void
}

const Filter = ({
  filterOptions,
  initialValues = {},
  handleFilter
}: FilterProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    handleFilter(values) // items vem daqui
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleChange = (name: string, value: boolean | string) => {
    // Se estiver checado, adiciona o valor a url, se não remove
    if (value) {
      setValues((s) => ({ ...s, [name]: value }))
    } else {
      setValues((s) => {
        const values = { ...s }
        delete values[name]
        return values
      })
    }
  }

  return (
    <>
      <S.OpenFilter onClick={() => setIsOpen(true)} title='Open filters'>
        <FilterListIcon aria-hidden='true' />
      </S.OpenFilter>

      <S.Wrapper isOpen={isOpen} data-testid='filterComponent'>
        <S.CloseFilter onClick={() => setIsOpen(false)} title='Close filters'>
          <CloseIcon />
        </S.CloseFilter>
        <S.Items>
          {filterOptions.map((filter, index) => (
            <S.Item key={index}>
              <Heading
                line='bottom'
                lineColor='secondary'
                color='black'
                size='xlarge'
              >
                {filter.title}
              </Heading>
              {filter.type === 'checkbox'
                ? filter.fields?.map((field, index) => (
                    <Checkbox
                      key={index}
                      id={field.id}
                      name={filter.name}
                      label={field.label}
                      value={field.value}
                      labelColor='black'
                      isChecked={values[field.value] === 'true'}
                      onCheck={(value) => handleChange(field.value, value)}
                    />
                  ))
                : filter.fields?.map((field, index) => (
                    <Radio
                      key={index}
                      id={field.id}
                      name={filter.name}
                      label={field.label}
                      value={field.value}
                      labelColor='black'
                      defaultChecked={
                        String(field.value) === String(values[filter.name])
                      }
                      onChange={() => handleChange(filter.name, field.value)}
                    />
                  ))}
            </S.Item>
          ))}
        </S.Items>
        <S.ButtonWrapper>
          <Button $full size='large' onClick={() => handleFilter(values)}>
            Filter
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  )
}

export default Filter
