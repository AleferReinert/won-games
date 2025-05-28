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

  if (error || !data) {
    console.error('Error loading recommend:', error)
    throw new Error('Error loading recommend')
  }
  const { title, highlight, products } = data.recommended.data.attributes
  const result = {
    title,
    highlight: highlight.background.data && highlightMapper(highlight),
    products: productMapper(products)
  }
  return result
}
