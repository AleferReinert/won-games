import HighlightStory from 'components/Highlight/Highlight.stories'
import Home, { HomeTemplateProps } from 'templates/Home/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/ProductSlider/mock'

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: HighlightStory.args,
      mostPopularsGames: gamesMock,
      comingSoonGames: gamesMock,
      comingSoonHighlight: HighlightStory.args,
      comingSoonMoreGames: gamesMock,
      freeHighlight: HighlightStory.args,
      freeGames: gamesMock
    }
  }
}

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}
