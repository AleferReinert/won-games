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
  if (error || !data?.recommended) return null
  const { title, highlight, products } = data.recommended

  return (
    <Showcase title={title} highlight={highlight && highlightMapper(highlight)} products={productMapper(products)} />
  )
}
