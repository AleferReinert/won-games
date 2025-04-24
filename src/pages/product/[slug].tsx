import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import Heading from 'components/Heading/Heading'
import { Loading } from 'components/Loading/Loading'
import ProductDetails, { ProductDetailsProps } from 'components/ProductDetails/ProductDetails'
import ProductHeader, { ProductHeaderProps } from 'components/ProductHeader/ProductHeader'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { COMING_SOON } from 'graphql/queries/comingSoon'
import { PRODUCT_BY_SLUG } from 'graphql/queries/productBySlug'
import { PRODUCTS } from 'graphql/queries/products'
import { RECOMMENDED_PRODUCTS } from 'graphql/queries/recommendedProducts'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import Base from 'templates/Default/Default'
import { ComingSoonQuery, ProductBySlugQuery, ProductsQuery, Query } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
import { highlightMapper, productMapper } from 'utils/mappers'
import * as S from './ProductPage.styles'

export interface ProductPageProps {
  cover: string
  productHeader: ProductHeaderProps
  description: string
  details: ProductDetailsProps
  comingSoon: ShowcaseProps
  recommended: ShowcaseProps
  gallery?: GalleryImageProps[]
}

// Return slugs of first 9 products
export async function getStaticPaths() {
  const apolloClient = initializeApollo({})
  const { data } = await apolloClient.query<ProductsQuery>({
    query: PRODUCTS,
    variables: { limit: 9 }
  })

  const paths = data.products.data.map((product) => ({
    params: { slug: product.attributes.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo({})
  const productResponse = await apolloClient.query<ProductBySlugQuery>({
    query: PRODUCT_BY_SLUG,
    variables: { slug: params?.slug },
    fetchPolicy: 'no-cache'
  })
  const productsNotFound = productResponse.data.products.data.length === 0
  productsNotFound && { notFound: true }

  const comingSoonResponse = await apolloClient.query<ComingSoonQuery>({
    query: COMING_SOON,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })
  const comingSoonProducts = comingSoonResponse.data.comingSoonProducts
  const comingSoonShowcase = comingSoonResponse.data.showcase.data.attributes.comingSoonProducts

  const recommendedProductsResponse = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: RECOMMENDED_PRODUCTS,
    fetchPolicy: 'no-cache'
  })

  const product = productResponse.data.products.data[0]
  const recommendedSection = recommendedProductsResponse.data.recommended.data.attributes

  return {
    revalidate: 60,
    props: {
      product,
      cover: getImageUrl(product.attributes.cover.data?.attributes.url) || '/img/defaults/product-cover-default.webp',
      productHeader: {
        id: product.id,
        title: product.attributes.name,
        description: product.attributes.short_description,
        price: product.attributes.price
      },
      gallery: product.attributes.gallery.data.map(({ attributes }) => ({
        src: getImageUrl(attributes.url),
        label: attributes.alternativeText
      })),
      description: product.attributes.description,
      details: {
        developer: product.attributes.developers.data[0]?.attributes.name || '',
        releaseDate: product.attributes.release_date || '',
        platforms: product.attributes.platforms.data.map((platform) => platform.attributes.name),
        publisher: product.attributes.publisher.data?.attributes.name || '',
        rating: product.attributes.rating || '',
        categories: product.attributes.categories.data.map(({ attributes }) => attributes.name)
      },
      comingSoon: {
        title: comingSoonShowcase.title,
        highlight: highlightMapper(comingSoonShowcase.highlight),
        products: productMapper(comingSoonProducts)
      },
      recommended: {
        title: recommendedSection.title,
        products: productMapper(recommendedSection.products)
      }
    }
  }
}

const ProductPage = ({
  cover,
  productHeader,
  gallery,
  description,
  details,
  comingSoon,
  recommended
}: ProductPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <Loading />

  return (
    <>
      <S.Cover src={cover} aria-label='cover' role='img' />
      <S.ProductHeaderWrapper>
        <ProductHeader {...productHeader} />
      </S.ProductHeaderWrapper>

      {gallery && (
        <S.GalleryWrapper>
          <Container>
            <Gallery items={gallery} />
          </Container>
        </S.GalleryWrapper>
      )}

      <S.Description>
        <Container>
          <Heading $line='left' $lineColor='secondary'>
            About game
          </Heading>
          <S.Content data-testid='description' dangerouslySetInnerHTML={{ __html: description }} />
        </Container>
      </S.Description>

      <Container>
        <S.ProductDetailsWrapper>
          <ProductDetails {...details} />
        </S.ProductDetailsWrapper>
        <Divider />
      </Container>

      <Showcase title={comingSoon.title} highlight={comingSoon.highlight} products={comingSoon.products} />
      <Showcase title={recommended.title} products={recommended.products} />
    </>
  )
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default ProductPage
