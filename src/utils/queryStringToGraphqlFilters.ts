import { ParsedUrlQueryInput } from 'querystring'

export interface ParseArgsProps {
  queryString: ParsedUrlQueryInput
}

/* 
  Pega os parametros da url criados a partir do filtro e
  transforma em uma query grapqhl.

  Exemplo:
  url -> .../price=0 & platforms=windows,mac & categories=action & $sort=price:asc
  resultado -> { 
    filters: {
      price: { lte: 0 }, 
      and: [ 
        { platforms: { name: { eqi: 'windows' } } }, 
        { platforms: { name: { eqi: 'mac' } } }, 
        { categories: { name: { eqi: 'action' } } } 
      ],
    }
    sort: 'price:asc'
  }
*/
export const queryStringToGraphqlFilters = ({ queryString }: ParseArgsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query = { filters: { price: {}, and: [] } } as Record<string, any>

  Object.keys(queryString).forEach((queryParam) => {
    const queryParamValue = queryString[queryParam]?.toString()

    if (queryParamValue) {
      if (queryParam === 'search') query.filters.name = { containsi: queryString.search }
      if (queryParam === 'price') query.filters.price = { lte: Number(queryString[queryParam]) }
      if (queryParam === 'sort') query.sort = queryString.sort?.toString()
      if (queryParam === 'platforms') {
        const queryParamValueArray = queryParamValue.split(',')
        queryParamValueArray.map((value) => {
          query.filters.and.push({ platforms: { name: { eqi: value } } })
        })
      }
      if (queryParam === 'categories') {
        const queryParamValueArray = queryParamValue.split(',')
        queryParamValueArray.map((value) => {
          query.filters.and.push({ categories: { name: { eqi: value } } })
        })
      }
    }
  })
  return query
}
