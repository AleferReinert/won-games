import {
  Close as CloseIcon,
  FilterList as FilterListIcon
} from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import Checkbox from 'components/Checkbox/Checkbox'
import Heading from 'components/Heading/Heading'
import Radio from 'components/Radio/Radio'
import { useState } from 'react'
import * as S from './Filter.styles'

interface FieldProps {
  label: string
  id: string
}

interface ItemProps {
  title: string
  name: string
  type: 'checkbox' | 'radio' | string
  fields: FieldProps[]
}

interface InitialValueProps {
  [field: string]: boolean | string
}

export type FilterProps = {
  items: ItemProps[]
  initialValues?: InitialValueProps
  onFilter: (values: InitialValueProps) => void
}

const Filter = ({ items, initialValues = {}, onFilter }: FilterProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleFilter = () => {
    onFilter(values)
  }

  const handleChange = (name: string, value: boolean | string) => {
    setValues((s) => ({ ...s, [name]: value }))
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
          {items.map((item, index) => (
            <S.Item key={index}>
              <Heading
                line='bottom'
                lineColor='secondary'
                color='black'
                size='xlarge'
              >
                {item.title}
              </Heading>
              {item.type === 'checkbox'
                ? item.fields.map((field, index) => (
                    <Checkbox
                      key={index}
                      id={field.id}
                      label={field.label}
                      labelColor='black'
                      isChecked={!!values[field.id]}
                      onCheck={(v) => handleChange(field.id, v)}
                    />
                  ))
                : item.fields.map((field, index) => (
                    <Radio
                      key={index}
                      id={field.id}
                      name={item.name}
                      label={field.label}
                      value={field.id}
                      labelColor='black'
                      defaultChecked={field.id === values[item.name]}
                      onChange={() => handleChange(item.name, field.id)}
                    />
                  ))}
            </S.Item>
          ))}
        </S.Items>
        <S.ButtonWrapper>
          <Button full size='large' onClick={handleFilter}>
            Filter
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  )
}

export default Filter
