import { fireEvent, screen } from '@testing-library/react'
import GameCard from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

const props = {
  title: 'Population Zero',
  developer: 'Other ocean',
  img: '/img/population-zero.jpg',
  price: 'R$ 215,00'
}

describe('<GameCard />', () => {
  it('Contem titulo, desenvolvedor, imagem e preço', () => {
    renderWithTheme(<GameCard {...props} />)

    // Titulo
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // Desenvolvedor
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // Imagem
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // Botão de favoritar
    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('Preço default', () => {
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText('R$ 215,00')

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('Preço promocional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice='R$ 185,00' />)

    // Preço antigo riscado
    expect(screen.getByText('R$ 215,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // Preço promocional não riscado
    expect(screen.getByText('R$ 185,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('Icone de favorito preenchido quando for true', () => {
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
