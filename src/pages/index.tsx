import type { ReactElement } from 'react'
import DefaultTemplate from 'templates/Default/Default'
import HomePage, { HomeTemplateProps } from './home'
import HighlightMock from 'components/Highlight/mock'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/ProductSlider/mock'

export async function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: HighlightMock,
      mostPopularsGames: gamesMock,
      comingSoonGames: gamesMock,
      comingSoonHighlight: HighlightMock,
      comingSoonMoreGames: gamesMock,
      freeHighlight: HighlightMock,
      freeGames: gamesMock
    }
  }
}

export default function Index(props: HomeTemplateProps) {
  //   if (props.data)
  //     return (
  //       <p style={{ color: 'white' }}>{JSON.stringify(props.data, null, 2)}</p>
  //     )
  return <HomePage {...props} />
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultTemplate>{page}</DefaultTemplate>
}
