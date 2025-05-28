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
  comingSoon: ShowcaseProps
  recommended: ShowcaseProps
}

export async function fetchProductBySlug(slug: string): Promise<ProductBySlugProps> {
  const apolloClient = initializeApollo()
  const productResponse = await apolloClient.query<ProductBySlugQuery>({
    query: PRODUCT_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'no-cache'
  })
  const productsNotFound = productResponse.data.products.data.length === 0
  if (productsNotFound) {
    return redirect('/404')
  }
  const comingSoonResponse = await apolloClient.query<ComingSoonQuery>({
    query: COMING_SOON,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })

  const comingSoon = comingSoonResponse.data.showcase.data.attributes.comingSoonProducts
  const recommended = await fetchRecommendedShowcase()
  const product = productResponse.data.products.data[0]
  const { cover, name, short_description, price, promotional_price, gallery, description } = product.attributes
  const { developers, release_date, platforms, publisher, rating, categories } = product.attributes
  return {
    cover: {
      url: getImageUrl(cover.data?.attributes.url) || '/img/default/product-cover.webp',
      alternativeText: cover.data.attributes.alternativeText ?? ''
    },
    productHeader: {
      id: product.id,
      title: name,
      description: short_description,
      price: price,
      promotionalPrice: promotional_price
    },
    gallery: gallery.data.map(({ attributes }) => ({
      src: getImageUrl(attributes.url),
      label: attributes.alternativeText
    })),
    description: description,
    details: {
      developer: developers.data[0]?.attributes.name || '',
      releaseDate: release_date || '',
      platforms: platforms.data.map((platform) => platform.attributes.name),
      publisher: publisher.data?.attributes.name || '',
      rating: rating || '',
      categories: categories.data.map(({ attributes }) => attributes.name)
    },
    comingSoon: {
      title: comingSoon.title,
      highlight: comingSoon.highlight.background.data && highlightMapper(comingSoon.highlight),
      products: productMapper(comingSoonResponse.data.comingSoonProducts)
    },
    recommended: {
      title: recommended.title,
      products: recommended.products
    }
  }
}
