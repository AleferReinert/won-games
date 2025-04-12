import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import Heading from 'components/Heading/Heading'
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
import { Home, ProductEntity, ProductEntityResponseCollection, Query } from 'types/generated'
import { initializeApollo } from 'utils/apollo'
import { highlightMapper, productMapper } from 'utils/mappers'
import * as S from './ProductPage.styles'

export interface ProductPageProps {
  cover: string
  productHeader: ProductHeaderProps
  description: string
  details: ProductDetailsProps
  comingSoonSection: ShowcaseProps
  recommendedSection: ShowcaseProps
  gallery?: GalleryImageProps[]
}

// Return slugs of first 9 products
export async function getStaticPaths() {
  const apolloClient = initializeApollo({})
  const { data } = await apolloClient.query({
    query: PRODUCTS,
    variables: { limit: 9 }
  })

  const paths = data.products.data.map((product: ProductEntity) => ({
    params: { slug: product.attributes.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo({})

  // Return product data
  const { data } = await apolloClient.query({
    query: PRODUCT_BY_SLUG,
    variables: { slug: params?.slug },
    fetchPolicy: 'no-cache'
  })

  // Redirect to 404 if product is not found
  if (!data.products.data.length) {
    return { notFound: true }
  }
  const product: ProductEntity = data.products.data[0]

  // Return coming soon section
  const {
    data: { comingSoonProducts, showcase }
  } = await apolloClient.query({
    query: COMING_SOON,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })
  const { comingSoonProducts: comingSoonSection }: Pick<Home, 'comingSoonProducts'> = showcase.data.attributes
  const comingSoonSectionProducts: ProductEntityResponseCollection = comingSoonProducts

  // Return recommended section
  const { data: recommended } = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: RECOMMENDED_PRODUCTS,
    fetchPolicy: 'no-cache'
  })
  const recommendedSection = recommended.recommended.data.attributes

  return {
    revalidate: 60,
    props: {
      product,
      cover: process.env.NEXT_PUBLIC_API_URL + product.attributes.cover.data?.attributes.url || '', // todo: add default cover
      productHeader: {
        id: product.id,
        title: product.attributes.name,
        description: product.attributes.short_description,
        price: product.attributes.price
      },
      gallery: product.attributes.gallery.data.map(({ attributes: image }) => ({
        src: process.env.NEXT_PUBLIC_API_URL + image.url,
        label: image.alternativeText
      })),
      description: product.attributes.description,
      details: {
        developer: product.attributes.developers.data[0]?.attributes.name ?? '', // todo: not is possible set this with required in Strapi, create default
        releaseDate: product.attributes.release_date ?? '',
        platforms: product.attributes.platforms.data.map((platform) => platform.attributes.name),
        publisher: product.attributes.publisher.data?.attributes.name ?? '', // todo: not is possible set this with required in Strapi, create default
        rating: product.attributes.rating ?? '',
        categories: product.attributes.categories.data.map(({ attributes: category }) => category.name)
      },
      comingSoonSection: {
        title: comingSoonSection.title,
        highlight: highlightMapper(comingSoonSection.highlight),
        products: productMapper(comingSoonSectionProducts)
      },
      recommendedSection: {
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
  comingSoonSection,
  recommendedSection
}: ProductPageProps) => {
  const router = useRouter()
  if (router.isFallback) return <p>Loading...</p> // todo: add loading component

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

      <Showcase
        title={comingSoonSection.title}
        highlight={comingSoonSection.highlight}
        products={comingSoonSection.products}
      />

      <Showcase title={recommendedSection.title} products={recommendedSection.products} />
    </>
  )
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default ProductPage
