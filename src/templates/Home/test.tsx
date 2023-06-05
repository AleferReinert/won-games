import 'match-media-mock'
import { screen } from '@testing-library/react'
import Home from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularsGames: [gamesMock[0]],
  comingSoonGames: [gamesMock[0]],
  comingSoonHighlight: highlightMock,
  comingSoonMoreGames: [gamesMock[0]],
  freeHighlight: highlightMock,
  freeGames: [gamesMock[0]]
}

describe('<Home />', () => {
  it('Renderizar todos componentes', () => {
    renderWithTheme(<Home {...props} />)

    // Topo
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // Rodapé
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    // Headings
    expect(
      screen.getByRole('heading', { name: /new releases/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /coming soon/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // Banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    // 5 sections com 1 card cada
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)

    // Highlights
    expect(screen.getAllByText(/read dead/i)).toHaveLength(3)
  })
})
