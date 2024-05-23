import { FilterOptionsProps } from 'components/Filter/Filter'
import { ParsedUrlQueryInput } from 'querystring'

export interface ParseArgsProps {
  queryString: ParsedUrlQueryInput
  filterOptions: Pick<FilterOptionsProps, 'name' | 'fields'>[]
}

/* 
  Pega os parametros da url criados a partir do filtro e
  transforma em uma query grapqhl.

  Exemplo:
  url -> price=0&windows-7=true&windows-8=true&action=true$sort=price:asc
  resultado -> { 
    filters: {
      price: { lte: 0 }, 
      and: [ 
        { platforms: { name: { eq: 'Windows 7' } } }, 
        { platforms: { name: { eq: 'Windows 8' } } }, 
        { categories: { name: { eq: 'Action' } } } 
      ],
    }
    sort: 'price:asc'
  }
*/
export const queryStringToGraphqlFilters = ({
  queryString,
  filterOptions
}: ParseArgsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query = { filters: { price: {}, and: [] } } as Record<string, any>
  Object.keys(queryString).forEach((key) => {
    if (key === 'sort') {
      const sortValue = queryString.sort
      query.sort = sortValue?.toString()
    } else if (key === 'price') {
      const priceValue = queryString[key]
      query.filters.price = { lte: Number(priceValue) }
    } else {
      // Verifica se a plataforma ou categoria passada na url existe nas opções de filtro
      filterOptions.find((item) => {
        if (item.name === 'platforms' || item.name === 'categories') {
          for (const checkboxFilter of item.fields) {
            // Se selecionadas, adiciona plataformas e categorias na query
            if (checkboxFilter.value === key && queryString[key]) {
              const optionKey = item.name // 'platforms' ou 'categories'
              const newSelectedFilter = {
                [optionKey]: { name: { eq: checkboxFilter.label } }
              }
              query.filters.and.push(newSelectedFilter)
            }
          }
        }
      })
    }
  })
  return query
}
