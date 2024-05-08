import Container from 'components/Container/Container'
import Divider from 'components/Divider/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery/Gallery'
import Heading from 'components/Heading/Heading'
import { HighlightProps } from 'components/Highlight/Highlight'
import highlightMock from 'components/Highlight/mock'
import { ProductProps } from 'components/Product/Product'
import ProductDetails, {
  ProductDetailsProps
} from 'components/ProductDetails/ProductDetails'
import ProductHeader, {
  ProductHeaderProps
} from 'components/ProductHeader/ProductHeader'
import gamesMock from 'components/ProductSlider/mock'
import Showcase from 'components/Showcase/Showcase'
import { GET_ALL_GAMES } from 'graphql/queries/getAllGames'
import { GET_GAME_BY_SLUG } from 'graphql/queries/getGameBySlug'
import { Game, GameEntity } from 'graphql/types'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import Base from 'templates/Default/Default'
import { initializeApollo } from 'utils/apollo'
import type { NextPageWithLayout } from '../_app'
import * as S from './Product.styles'

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

// Retorna os slugs dos primeiros 9 jogos
export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: GET_ALL_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.data.map((game: GameEntity) => ({
    params: { slug: game.attributes.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_GAME_BY_SLUG,
    variables: { slug: params?.slug }
  })

  // Se a url for inválida, redireciona para a página 404
  if (!data.games.data.length) {
    return { notFound: true }
  }

  const game: Game = data.games.data[0].attributes

  return {
    props: {
      game,
      revalidate: 60,
      cover: game.cover.data
        ? 'http://localhost:1337' + game.cover.data.attributes.url // todo: create variable for url
        : '', // todo: add default cover
      productHeader: {
        title: game.name,
        description: game.short_description,
        price: game.price
      },
      gallery: game.gallery.data.map(({ attributes: image }) => ({
        src: 'http://localhost:1337' + image.url,
        label: image.alternativeText
      })),
      description: game.description,
      details: {
        developer: game.developers.data[0].attributes.name,
        releaseDate: game.release_date,
        platforms: game.platforms.data.map(
          (platform) => platform.attributes.name
        ),
        publisher: game.publisher.data.attributes.name,
        rating: game.rating,
        categories: game.categories.data.map(
          ({ attributes: category }) => category.name
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
  if (router.isFallback) return <p>Loading...</p> // todo: add loading component

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
