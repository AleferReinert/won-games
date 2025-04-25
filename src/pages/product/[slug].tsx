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
import { ComingSoonQuery, ProductBySlugQuery, ProductsQuery, RecommendedProductsQuery } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
import { highlightMapper, productMapper } from 'utils/mappers'
import * as S from './ProductPage.styles'

export interface ProductPageProps {
  cover: string
  productHeader: ProductHeaderProps
  gallery?: GalleryImageProps[]
  description: string
  details: ProductDetailsProps
  comingSoon: ShowcaseProps
  recommended: ShowcaseProps
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

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const apolloClient = initializeApollo({})
  const productResponse = await apolloClient.query<ProductBySlugQuery>({
    query: PRODUCT_BY_SLUG,
    variables: { slug: params?.slug },
    fetchPolicy: 'no-cache'
  })
  const productsNotFound = productResponse.data.products.data.length === 0
  if (productsNotFound) {
    return { notFound: true }
  }

  const comingSoonResponse = await apolloClient.query<ComingSoonQuery>({
    query: COMING_SOON,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })

  const recommendedProducts = await apolloClient.query<RecommendedProductsQuery>({
    query: RECOMMENDED_PRODUCTS,
    fetchPolicy: 'no-cache'
  })

  const comingSoon = comingSoonResponse.data.showcase.data.attributes.comingSoonProducts
  const recommended = recommendedProducts.data.recommended.data.attributes
  const product = productResponse.data.products.data[0]
  const { cover, name, short_description, price, gallery, description, developers, release_date } = product.attributes
  const { platforms, publisher, rating, categories } = product.attributes

  return {
    revalidate: 60,
    props: {
      cover: getImageUrl(cover.data?.attributes.url) || '/img/defaults/product-cover-default.webp',
      productHeader: {
        id: product.id,
        title: name,
        description: short_description,
        price: price
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
        highlight: highlightMapper(comingSoon.highlight),
        products: productMapper(comingSoonResponse.data.comingSoonProducts)
      },
      recommended: {
        title: recommended.title,
        products: productMapper(recommended.products)
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

      <Showcase {...comingSoon} />
      <Showcase {...recommended} />
    </>
  )
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default ProductPage
