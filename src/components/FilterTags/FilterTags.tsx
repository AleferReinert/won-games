'use client'
import { useFilter } from 'hooks/useFilter'
import { MdCancel } from 'react-icons/md'
import { tv } from 'tailwind-variants'

const filterTags = tv({
  slots: {
    listItem: 'inline-flex py-0.5 bg-zinc-50 text-theme-gray-950 items-center whitespace-nowrap rounded-sm pr-1 pl-2',
    svg: 'size-6 scale-80 fill-theme-gray-950 cursor-pointer transition hover:fill-theme-primary',
    content: 'leading-7 text-sm font-light',
    span: 'text-theme-primary font-medium'
  }
})
export const FilterTags = () => {
  const { urlQueryParams, filterOptions, removeFilterOption, removeSearchParam } = useFilter()
  const { listItem, svg, content, span } = filterTags()

  return (
    Object.keys(urlQueryParams).length > 0 && (
      <ul className='flex flex-wrap gap-2 mb-4' aria-label='Applied filters'>
        {'search' in urlQueryParams && (
          <li className={listItem()}>
            <span className={content()}>
              Results for <span className={span()}>{urlQueryParams.search}</span>
            </span>
            <button title='Remove' onClick={() => removeSearchParam()}>
              <MdCancel aria-hidden className={svg()} />
            </button>
          </li>
        )}
        {urlQueryParams &&
          Object.entries(urlQueryParams).map(([key, value]) => {
            if (!value) return null
            return filterOptions.map((item) => {
              if (item.name === key) {
                const checkedOptions = item.fields.filter((field) => {
                  const valuesArray = value
                    .toString()
                    .split(',')
                    .map((v) => v.trim())
                  return valuesArray.includes(field.value)
                })

                return checkedOptions.map((item) => {
                  const isUnder = item.label.toLowerCase().includes('under')
                  let labelContent: React.ReactNode = item.label

                  if (isUnder) {
                    const parts = item.label.split(' ')
                    const [first, ...rest] = parts
                    labelContent = (
                      <>
                        {first} <span className={span()}>{rest.join(' ')}</span>
                      </>
                    )
                  }
                  return (
                    <li key={item.value} className={listItem()}>
                      <span className={content()}>{labelContent}</span>
                      <button title='Remove' onClick={() => removeFilterOption(key, item.value)}>
                        <MdCancel aria-hidden className={svg()} />
                      </button>
                    </li>
                  )
                })
              }
            })
          })}
      </ul>
    )
  )
}
