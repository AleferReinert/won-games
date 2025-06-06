import { ShowcaseProps } from 'components/Showcase/Showcase'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { RecommendedProductsQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'

export async function fetchRecommendedShowcase(): Promise<ShowcaseProps> {
  const apolloClient = initializeApollo()
  const { data, error } = await apolloClient.query<RecommendedProductsQuery>({
    query: RECOMMENDED_PRODUCTS,
    fetchPolicy: 'no-cache'
  })

  if (error || !data.recommended) {
    console.error('Error loading recommend:', error)
    throw new Error('Error loading recommend')
  }
  const { title, highlight, products } = data.recommended
  return {
    title,
    highlight: highlight && highlightMapper(highlight),
    products: productMapper(products)
  }
}
