import { screen } from '@testing-library/react'
import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

describe('<Button />', () => {
  it('Botão médio como padrão', () => {
    renderWithTheme(<Button>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '4rem',
      padding: `0 ${theme.spacings.medium}`,
      'font-size': theme.font.sizes.small
    })
  })

  it('Botão pequeno', () => {
    renderWithTheme(<Button size='small'>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '3rem',
      'font-size': theme.font.sizes.xsmall
    })
  })

  it('Botão grande', () => {
    renderWithTheme(<Button size='large'>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '5rem',
      padding: `0 ${theme.spacings.large}`,
      'font-size': theme.font.sizes.medium
    })
  })

  it('Botão full', () => {
    renderWithTheme(<Button fullWidth>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('Botão com icone', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid='icon' />}>lorem ipsum</Button>
    )
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
