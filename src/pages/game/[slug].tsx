import Game, { GameTemplateProps } from 'templates/Game'
import gameInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'
import textContentMock from 'components/TextContent/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

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
      gameInfo: gameInfoMock,
      gallery: galleryMock,
      description: textContentMock.content,
      details: gameDetailsMock,
      upcomingHighlight: highlightMock,
      upcomingGames: gamesMock,
      recommendedGames: gamesMock
    }
  }
}
