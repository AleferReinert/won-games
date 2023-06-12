import { fireEvent, screen } from '@testing-library/react'
import GameCard from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import props from './mock'

describe('<GameCard />', () => {
  it('should render title, developer, image, price and wishlist button', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price without discount', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render with promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice='$185.00' />)

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('$185.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render remove from wishlist button', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('Chamar método ao clicar no favorito', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon='My Ribbon'
        ribbonColor='secondary'
        ribbonSize='small'
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)
    expect(ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(ribbon).toHaveStyle({
      height: '2.4rem',
      fontSize: theme.font.sizes.xxsmall
    })
    expect(ribbon).toBeInTheDocument()
  })
})
