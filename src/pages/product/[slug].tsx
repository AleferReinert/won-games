import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import Heading from 'components/Heading/Heading'
import ProductDetails, { ProductDetailsProps } from 'components/ProductDetails/ProductDetails'
import ProductHeader, { ProductHeaderProps } from 'components/ProductHeader/ProductHeader'
import Showcase, { ShowcaseProps } from 'components/Showcase/Showcase'
import { GET_ALL_PRODUCTS } from 'graphql/queries/getAllProducts'
import { GET_COMING_SOON_PRODUCTS } from 'graphql/queries/getComingSoonProducts'
import { GET_PRODUCT_BY_SLUG } from 'graphql/queries/getProductBySlug'
import { GET_RECOMMENDED_PRODUCTS } from 'graphql/queries/getRecommendedProducts'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import Base from 'templates/Default/Default'
import { Game, GameEntity, Query } from 'types/generated'
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
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
    variables: { limit: 9 }
  })

  const paths = data.games.data.map((game: GameEntity) => ({
    params: { slug: game.attributes.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  // Return product data
  const { data } = await apolloClient.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug: params?.slug }
  })

  // Redirect to 404 if product is not found
  if (!data.games.data.length) {
    return { notFound: true }
  }
  const game: Game = data.games.data[0].attributes

  // Return coming soon section
  const {
    data: { comingSoonGames, showcase }
  } = await apolloClient.query({
    query: GET_COMING_SOON_PRODUCTS,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) }
  })
  const { comingSoonGames: comingSoonSection } = showcase.data.attributes

  // Return recommended section
  const { data: recommended } = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: GET_RECOMMENDED_PRODUCTS
  })

  const recommendedSection = recommended.recommended.data.attributes.showcase

  return {
    revalidate: 60,
    props: {
      game,
      cover: process.env.NEXT_PUBLIC_API_URL + game.cover.data?.attributes.url || '', // todo: add default cover
      productHeader: {
        title: game.name,
        description: game.short_description,
        price: game.price
      },
      gallery: game.gallery.data.map(({ attributes: image }) => ({
        src: process.env.NEXT_PUBLIC_API_URL + image.url,
        label: image.alternativeText
      })),
      description: game.description,
      details: {
        developer: game.developers.data[0]?.attributes.name ?? '', // todo: not is possible set this with required in Strapi, create default
        releaseDate: game.release_date ?? '',
        platforms: game.platforms.data.map((platform) => platform.attributes.name),
        publisher: game.publisher.data?.attributes.name ?? '', // todo: not is possible set this with required in Strapi, create default
        rating: game.rating ?? '',
        categories: game.categories.data.map(({ attributes: category }) => category.name)
      },
      comingSoonSection: {
        title: comingSoonSection.title,
        highlight: highlightMapper(comingSoonSection.highlight),
        products: productMapper(comingSoonGames)
      },
      recommendedSection: {
        title: recommendedSection.title,
        products: productMapper(recommendedSection.games)
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
