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
import { GameEntity, GameEntityResponseCollection, Home, Query } from 'types/generated'
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
    query: PRODUCTS,
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
    query: PRODUCT_BY_SLUG,
    variables: { slug: params?.slug },
    fetchPolicy: 'no-cache'
  })

  // Redirect to 404 if product is not found
  if (!data.games.data.length) {
    return { notFound: true }
  }
  const game: GameEntity = data.games.data[0]

  // Return coming soon section
  const {
    data: { comingSoonGames, showcase }
  } = await apolloClient.query({
    query: COMING_SOON,
    variables: { limit: 9, currentDate: new Date().toISOString().slice(0, 10) },
    fetchPolicy: 'no-cache'
  })
  const { comingSoonGames: comingSoonSection }: Pick<Home, 'comingSoonGames'> = showcase.data.attributes
  const comingSoonSectionProducts: GameEntityResponseCollection = comingSoonGames

  // Return recommended section
  const { data: recommended } = await apolloClient.query<Pick<Query, 'recommended'>>({
    query: RECOMMENDED_PRODUCTS,
    fetchPolicy: 'no-cache'
  })
  const recommendedSection = recommended.recommended.data.attributes.showcase

  return {
    revalidate: 60,
    props: {
      game,
      cover: process.env.NEXT_PUBLIC_API_URL + game.attributes.cover.data?.attributes.url || '', // todo: add default cover
      productHeader: {
        id: game.id,
        title: game.attributes.name,
        description: game.attributes.short_description,
        price: game.attributes.price
      },
      gallery: game.attributes.gallery.data.map(({ attributes: image }) => ({
        src: process.env.NEXT_PUBLIC_API_URL + image.url,
        label: image.alternativeText
      })),
      description: game.attributes.description,
      details: {
        developer: game.attributes.developers.data[0]?.attributes.name ?? '', // todo: not is possible set this with required in Strapi, create default
        releaseDate: game.attributes.release_date ?? '',
        platforms: game.attributes.platforms.data.map((platform) => platform.attributes.name),
        publisher: game.attributes.publisher.data?.attributes.name ?? '', // todo: not is possible set this with required in Strapi, create default
        rating: game.attributes.rating ?? '',
        categories: game.attributes.categories.data.map(({ attributes: category }) => category.name)
      },
      comingSoonSection: {
        title: comingSoonSection.title,
        highlight: highlightMapper(comingSoonSection.highlight),
        products: productMapper(comingSoonSectionProducts)
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
