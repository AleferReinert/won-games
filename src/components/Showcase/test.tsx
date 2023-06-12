import 'match-media-mock'
import { screen } from '@testing-library/react'
import Showcase from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const props = {
  title: 'Most Populars',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('Renderizar com todos componentes', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('Renderizar sem title', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} games={props.games} />
    )

    expect(
      screen.queryByRole('heading', { name: /most populars/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('Renderizar sem highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('Renderizar sem games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
