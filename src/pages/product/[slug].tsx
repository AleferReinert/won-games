import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import ProductHeader, {
  ProductHeaderProps
} from 'components/ProductHeader/ProductHeader'
import ProductDetails, {
  ProductDetailsProps
} from 'components/ProductDetails/ProductDetails'
import { ProductProps } from 'components/Product/Product'
import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Default/Default'
import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Heading from 'components/Heading/Heading'
import Showcase from 'components/Showcase/Showcase'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'
import * as S from './Product.styles'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAME_BY_SLUG } from 'graphql/queries/gameBySlug'
import { QUERY_GAMES } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import { Game, GameEntity } from 'graphql/generated/types'

type ProductPageProps = {
  cover: string
  productHeader: ProductHeaderProps
  gallery?: GalleryImageProps[]
  description: string
  details: ProductDetailsProps
  upcomingHighlight: HighlightProps
  upcomingGames: ProductProps[]
  recommendedGames: ProductProps[]
}

const apolloClient = initializeApollo()

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.data.map((game: GameEntity) => ({
    params: { slug: game.attributes.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: params?.slug }
  })

  if (data.games.length === 0) return { notFound: true }

  const game: Game = data.games.data[0].attributes

  return {
    props: {
      game,
      revalidate: 60,
      cover: 'http://localhost:1337' + game.cover.data?.attributes.url ?? '',
      productHeader: {
        title: game.name,
        description: game.short_description,
        price: game.price
      },
      gallery: game.gallery.data.map((image) => ({
        src: 'http://localhost:1337' + image.attributes.url,
        label: image.attributes.alternativeText
      })),
      description: game.description,
      details: {
        developer: game.developers.data[0].attributes.name,
        releaseDate: '2019-09-13T23:00:00',
        platforms: game.platforms.data.map(
          (platform) => platform.attributes.name
        ),
        publisher: game.publisher.data.attributes.name,
        rating: game.rating,
        categories: game.categories.data.map(
          (category) => category.attributes.name
        )
      },
      upcomingHighlight: highlightMock,
      upcomingGames: gamesMock,
      recommendedGames: gamesMock
    }
  }
}

const ProductPage = (props: ProductPageProps & NextPageWithLayout) => {
  const router = useRouter()
  if (router.isFallback) return <p>Loading...</p>

  return (
    <>
      <S.Cover src={props.cover} aria-label='cover' role='img' />
      <S.ProductHeaderWrapper>
        <ProductHeader {...props.productHeader} />
      </S.ProductHeaderWrapper>

      {!!props.gallery && (
        <S.GalleryWrapper>
          <Container>
            <Gallery items={props.gallery} />
          </Container>
        </S.GalleryWrapper>
      )}

      <S.Description>
        <Container>
          <Heading line='left' lineColor='secondary'>
            About game
          </Heading>
          <div
            data-testid='description'
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </Container>
      </S.Description>

      <Container>
        <S.ProductDetailsWrapper>
          <ProductDetails {...props.details} />
        </S.ProductDetailsWrapper>
        <Divider />
      </Container>

      <Showcase
        title='Upcoming'
        highlight={props.upcomingHighlight}
        games={props.upcomingGames}
      />
      <Showcase
        title='You make like these games'
        games={props.recommendedGames}
      />
    </>
  )
}

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Base>{page}</Base>
}

export default ProductPage
