import { screen } from '@testing-library/react'
import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import 'jest-styled-components'

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
      'border-left': `0.7rem solid ${theme.colors.secondary}`
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
})
