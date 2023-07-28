import Game, { GameTemplateProps } from 'templates/Game/Game'
import productHeaderMock from 'components/ProductHeader/mock'
import galleryMock from 'components/Gallery/mock'
import textContentMock from 'components/TextContent/mock'
import productDetailsMock from 'components/ProductDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/ProductSlider/mock'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover: '/img/games/cyberpunk-1.jpg',
      productHeader: productHeaderMock,
      gallery: galleryMock,
      description: textContentMock.content,
      details: productDetailsMock,
      upcomingHighlight: highlightMock,
      upcomingGames: gamesMock,
      recommendedGames: gamesMock
    }
  }
}
