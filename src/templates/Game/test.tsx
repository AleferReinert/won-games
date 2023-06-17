import 'match-media-mock'
import { screen } from '@testing-library/react'
import Game, { GameTemplateProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import gameInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import theme from 'styles/theme'

const props: GameTemplateProps = {
  cover: 'cover.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: '<h1>custom HTML</h1>',
  details: gameDetailsMock,
  upcomingHighlight: highlightMock,
  upcomingGames: gamesMock,
  recommendedGames: gamesMock
}

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock GameInfo'></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Gallery'></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock GameDetails'></div>
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

describe('<Game />', () => {
  it('should render all components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
  })

  it('should render without gallery', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)
    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should render gallery only desktop', () => {
    renderWithTheme(<Game {...props} />)

    const gallery =
      screen.getByTestId('Mock Gallery').parentElement?.parentElement

    expect(gallery).toHaveStyle({
      display: 'none'
    })
    expect(gallery).toHaveStyleRule('display', 'block', {
      media: `(min-width: ${theme.breakpoint.small})`
    })
  })

  it('should render responsive cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('img', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: props.cover,
      height: '40rem'
    })
    expect(cover).toHaveStyleRule('height', '58rem', {
      media: `(min-width: ${theme.breakpoint.small})`
    })
    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: `(min-width: ${theme.breakpoint.small})`
      }
    )
  })
})
