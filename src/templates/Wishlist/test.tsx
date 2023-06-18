import { screen } from '@testing-library/react'
import Wishlist, { WishlistTemplateProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const props: WishlistTemplateProps = {
  wishlistGames: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Showcase'></div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Empty'></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render all components', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render Empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedHighlight={highlightMock}
        recommendedGames={gamesMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
