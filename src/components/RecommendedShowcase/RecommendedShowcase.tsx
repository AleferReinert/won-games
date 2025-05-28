'use client'
import { useQuery } from '@apollo/client'
import { Showcase } from 'components/Showcase/Showcase'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { RecommendedProductsQuery } from 'types/generated'
import { highlightMapper, productMapper } from 'utils/mappers'

export function RecommendedShowcase() {
  const { loading, error, data } = useQuery<RecommendedProductsQuery>(RECOMMENDED_PRODUCTS)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error || !data) return null

  const { title, highlight, products } = data.recommended.data.attributes

  return (
    <Showcase
      title={title}
      highlight={highlight.background.data && highlightMapper(highlight)}
      products={productMapper(products)}
    />
  )
}
