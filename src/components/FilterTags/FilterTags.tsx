import { Cancel } from '@styled-icons/material'
import { useFilter } from 'hooks/useFilter'
import * as S from './FilterTags.styles'

const FilterTags = () => {
  const { urlQueryParams, filterOptions, removeFilterOption, removeSearchParam } = useFilter()

  return (
    <S.Tags>
      {'search' in urlQueryParams && (
        <S.Tag>
          <span>
            Results for <span>{urlQueryParams.search}</span>
          </span>
          <button title='Remove' onClick={() => removeSearchParam()}>
            <Cancel aria-hidden />
          </button>
        </S.Tag>
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
                      {first} <span>{rest.join(' ')}</span>
                    </>
                  )
                }
                return (
                  <S.Tag key={item.value}>
                    <span>{labelContent}</span>
                    <button title='Remove' onClick={() => removeFilterOption(key, item.value)}>
                      <Cancel aria-hidden />
                    </button>
                  </S.Tag>
                )
              })
            }
          })
        })}
    </S.Tags>
  )
}

export default FilterTags
