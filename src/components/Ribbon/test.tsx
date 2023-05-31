import { screen } from '@testing-library/react'
import Ribbon from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Ribbon />', () => {
  it('Renderizar o texto', () => {
    renderWithTheme(<Ribbon>Lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })

  it('Cor primaria como padrão', () => {
    renderWithTheme(<Ribbon>Lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('Cor secundaria', () => {
    renderWithTheme(<Ribbon color='secondary'>Lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('Tamanho normal como padrão', () => {
    renderWithTheme(<Ribbon>Lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      height: '3.3rem',
      fontSize: theme.font.sizes.small
    })
  })

  it('Tamanho menor', () => {
    renderWithTheme(<Ribbon size='small'>Lorem ipsum</Ribbon>)
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      height: '2.4rem',
      fontSize: theme.font.sizes.xxsmall
    })
  })
})
