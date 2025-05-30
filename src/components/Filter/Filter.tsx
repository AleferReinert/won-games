'use client'
import { Button } from 'components/Button/Button'
import { Heading } from 'components/Heading/Heading'
import { InputWithLabel } from 'components/InputWithLabel/InputWithLabel'
import { useFilter } from 'hooks/useFilter'
import { useEffect, useState } from 'react'
import { MdOutlineClose, MdOutlineFilterList } from 'react-icons/md'
import { tv } from 'tailwind-variants'

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

const filter = tv({
  slots: {
    buttonOpen: 'text-zinc-50 w-6 bg-transparent mb-6 cursor-pointer lg:hidden',
    buttonClose: 'text-theme-gray-950 bg-transparent flex ml-auto p-4 cursor-pointer lg:hidden',
    buttonClear: 'text-theme-primary bg-transparent text-xs cursor-pointer',
    buttonFilterWrapper:
      'fixed bottom-0 left-0 right-0 p-6 bg-zinc-50 lg:hidden shadow-[0_-0.2rem_0.4rem_0_rgba(3,5,23,0.1)]',
    component:
      'bg-zinc-50 fixed top-0 left-0 w-full z-20 grid transition-opacity duration-300 grid-rows-[max-content_auto_max-content] bottom-[98px]',
    items: 'overflow-y-auto px-6 lg:px-0',
    item: 'border-b border-theme-gray-200 pb-6 mb-6 last:border-0 last:pb-0 lg:border-b-theme-gray-800'
  },
  variants: {
    isOpen: {
      true: {
        component: 'opacity-100 pointer-events-auto'
      },
      false: {
        component:
          'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto lg:static lg:bg-transparent lg:text-zinc-50'
      }
    }
  },
  defaultVariants: {
    isOpen: false
  }
})

export const Filter = () => {
  const { filterOptions, selectedFilters, clearFilterSession, handleFilter, handleChange } = useFilter()
  const [isOpen, setIsOpen] = useState(false)
  const { component, buttonOpen, buttonClose, buttonFilterWrapper, items, item, buttonClear } = filter({ isOpen })

  useEffect(() => {
    handleFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters])

  return (
    <>
      <button onClick={() => setIsOpen(true)} title='Open filters' aria-label='Open filters' className={buttonOpen()}>
        <MdOutlineFilterList role='img' aria-hidden='true' className='fill-zinc-50 size-6' />
      </button>

      <div data-testid='FilterComponent' className={component({ isOpen })}>
        <button
          onClick={() => setIsOpen(false)}
          title='Close filters'
          aria-label='Close filters'
          className={buttonClose()}
        >
          <MdOutlineClose role='img' aria-hidden className='size-6' />
        </button>
        <div className={items()}>
          {filterOptions.map((filter) => {
            const filterSessionChecked = Object.keys(selectedFilters).includes(filter.name)

            return (
              <div key={filter.title} className={item()}>
                <Heading
                  line='bottom'
                  lineBottomSize='small'
                  lineColor='secondary'
                  color='black'
                  size='large'
                  className='lg:text-zinc-50'
                >
                  {filter.title}
                </Heading>
                {filter.type === 'checkbox'
                  ? filter.fields?.map((field) => {
                      const arr = Array.isArray(selectedFilters[filter.name])
                        ? (selectedFilters[filter.name] as string[])
                        : []
                      const isChecked = arr.includes(field.value)

                      return (
                        <InputWithLabel
                          key={field.id}
                          label={field.label}
                          type='checkbox'
                          id={field.id}
                          name={filter.name}
                          value={field.value}
                          checked={isChecked}
                          onChange={() => handleChange(filter.name, field.value)}
                        />
                      )
                    })
                  : filter.fields?.map((field) => (
                      <InputWithLabel
                        key={field.id}
                        label={field.label}
                        type='radio'
                        id={field.id}
                        name={filter.name}
                        value={field.value}
                        checked={String(selectedFilters[filter.name] ?? '') === String(field.value)}
                        onChange={() => handleChange(filter.name, field.value)}
                      />
                    ))}
                {filterSessionChecked && (
                  <div className='flex justify-end'>
                    <button onClick={() => clearFilterSession(filter.name)} className={buttonClear()}>
                      Clear
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className={buttonFilterWrapper()}>
          <Button full size='large' onClick={handleFilter}>
            Filter
          </Button>
        </div>
      </div>
    </>
  )
}
