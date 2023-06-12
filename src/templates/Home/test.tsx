import 'match-media-mock'
import { screen } from '@testing-library/react'
import Home from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularsGames: gamesMock,
  comingSoonGames: gamesMock,
  comingSoonHighlight: highlightMock,
  comingSoonMoreGames: gamesMock,
  freeHighlight: highlightMock,
  freeGames: gamesMock
}

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock BannerSlider'></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Showcase'></div>
    }
  }
})

describe('<Home />', () => {
  it('Renderizar banner e showcases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
