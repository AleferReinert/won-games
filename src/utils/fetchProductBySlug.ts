import { GalleryImageProps } from 'components/Gallery/Gallery'
import { ProductDetailsProps } from 'components/ProductDetails/ProductDetails'
import { ProductHeaderProps } from 'components/ProductHeader/ProductHeader'
import { ShowcaseProps } from 'components/Showcase/Showcase'
import { COMING_SOON } from 'graphql/queries/comingSoon'
import { PRODUCT_BY_SLUG } from 'graphql/queries/productBySlug'
import { redirect } from 'next/navigation'
import { ComingSoonQuery, ProductBySlugQuery } from 'types/generated'
import { initializeApollo } from './apollo'
import { fetchRecommendedShowcase } from './fetchRecommendedShowcase'
import { getImageUrl } from './getImageUrl'
import { highlightMapper, productMapper } from './mappers'

interface ProductBySlugProps {
  cover: {
    url: string
    alternativeText: string
  }
  productHeader: ProductHeaderProps
  gallery?: GalleryImageProps[]
  description: string
  details: ProductDetailsProps
  comingSoon?: ShowcaseProps
  recommended: ShowcaseProps
}

export async function fetchProductBySlug(slug: string): Promise<ProductBySlugProps> {
  const apolloClient = initializeApollo()
  const productResponse = await apolloClient.query<ProductBySlugQuery>({
    query: PRODUCT_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'no-cache'
  })
  const productsNotFound = productResponse.data.products.length === 0
  if (productsNotFound) {
    return redirect('/404')
  }
  const comingSoonResponse = await apolloClient.query<ComingSoonQuery>({
    query: COMING_SOON,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })

  const comingSoon = comingSoonResponse.data.showcase?.comingSoonProducts
  const recommended = await fetchRecommendedShowcase()
  const product = productResponse.data.products[0]
  return {
    cover: {
      url: getImageUrl(product.cover?.url) || '/img/default/product-cover.webp',
      alternativeText: product.cover.alternativeText ?? ''
    },
    productHeader: {
      id: product.documentId,
      title: product.name,
      description: product.short_description,
      ...(product.price && { price: product.price }),
      promotionalPrice: product.promotional_price
    },
    gallery: product.gallery.map(({ url, alternativeText }) => ({
      src: getImageUrl(url),
      label: alternativeText || ''
    })),
    description: product.description,
    details: {
      developer: product.developers[0]?.name || '',
      releaseDate: product.release_date || '',
      platforms: product.platforms.map((platform) => platform.name),
      publisher: product.publisher?.name || '',
      rating: product.rating,
      categories: product.categories.map(({ name }) => name)
    },
    ...(comingSoon && {
      comingSoon: {
        title: comingSoon.title,
        highlight: comingSoon.highlight && highlightMapper(comingSoon.highlight),
        products: productMapper(comingSoonResponse.data.comingSoonProducts)
      }
    }),
    recommended: {
      title: recommended.title,
      products: recommended.products
    }
  }
}
