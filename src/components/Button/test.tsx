import { screen } from '@testing-library/react'
import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

describe('<Button />', () => {
  it('should render a medium size as default', () => {
    renderWithTheme(<Button>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '4rem',
      padding: `0 ${theme.spacings.medium}`,
      'font-size': theme.font.sizes.small
    })
  })

  it('should render a small size', () => {
    renderWithTheme(<Button size='small'>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '3rem',
      'font-size': theme.font.sizes.xsmall
    })
  })

  it('should render a large size', () => {
    renderWithTheme(<Button size='large'>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '5rem',
      padding: `0 ${theme.spacings.large}`,
      'font-size': theme.font.sizes.medium
    })
  })

  it('should render a full size', () => {
    renderWithTheme(<Button fullWidth>lorem ipsum</Button>)
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid='icon' />}>lorem ipsum</Button>
    )
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a button as link', () => {
    renderWithTheme(
      <Button as='a' href='/link'>
        lorem ipsum
      </Button>
    )

    expect(screen.getByRole('link', { name: /lorem ipsum/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('Botão minimal (sem background)', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid='icon' />} minimal>
        lorem ipsum
      </Button>
    )

    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      backgroundColor: 'transparent'
    })
    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      color: theme.colors.primary
    })
  })
})
