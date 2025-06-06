import { productsLimit } from 'app/(main)/explore/page'
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
        { platforms: { slug: { eqi: 'windows' } } }, 
        { platforms: { slug: { eqi: 'mac' } } }, 
        { categories: { slug: { eqi: 'action' } } } 
      ],
    }
    sort: 'price:asc'
  }
*/
export const queryStringToGraphqlVariables = ({ queryString }: ParseArgsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const variables = { filters: { and: [] }, limit: productsLimit } as Record<string, any>

  Object.keys(queryString).forEach((queryParam) => {
    const queryParamValue = queryString[queryParam]?.toString()

    if (queryParamValue) {
      if (queryParam === 'search') variables.filters.name = { containsi: queryString.search }
      if (queryParam === 'price') variables.filters.and.push({ price: { lte: Number(queryString[queryParam]) } })
      if (queryParam === 'sort') variables.sort = queryString.sort?.toString()
      if (queryParam === 'platforms') {
        const queryParamValueArray = queryParamValue.split(',')
        queryParamValueArray.map((value) => {
          variables.filters.and.push({ platforms: { slug: { eq: value } } })
        })
      }
      if (queryParam === 'categories') {
        const queryParamValueArray = queryParamValue.split(',')
        queryParamValueArray.map((value) => {
          variables.filters.and.push({ categories: { slug: { eq: value } } })
        })
      }
    }
  })
  return variables
}
