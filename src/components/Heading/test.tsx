import { screen } from '@testing-library/react'
import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Heading />', () => {
  it('Heading branco como padrão', () => {
    renderWithTheme(<Heading>Lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('Heading preto', () => {
    renderWithTheme(<Heading color='black'>Lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('Heading com borda na esquerda', () => {
    renderWithTheme(<Heading lineLeft>Lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })
  })

  it('Heading com borda em baixo', () => {
    renderWithTheme(<Heading lineBottom>Lorem ipsum</Heading>)
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('Heading em tamanho menor', () => {
    renderWithTheme(<Heading size='small'>Lorem ipsum</Heading>)
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('font-size', theme.font.sizes.medium)
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('width', `3rem`, {
      modifier: '::after'
    })
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('border-bottom-width', `0.4rem`, {
      modifier: '::after'
    })
  })

  it('Heading com borda em cor secundária', () => {
    renderWithTheme(
      <Heading lineColor='secondary' lineLeft lineBottom>
        Lorem ipsum
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })
    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    )
  })
})
