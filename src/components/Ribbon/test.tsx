import { screen } from '@testing-library/react'
import Ribbon from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Ribbon />', () => {
  it('should render the text', () => {
    renderWithTheme(<Ribbon>20% off</Ribbon>)
    expect(screen.getByText(/20% off/i)).toBeInTheDocument()
  })

  it('should render primary color as default', () => {
    renderWithTheme(<Ribbon>20% off</Ribbon>)
    expect(screen.getByText(/20% off/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('should render secondary color', () => {
    renderWithTheme(<Ribbon color='secondary'>20% off</Ribbon>)
    expect(screen.getByText(/20% off/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a normal size as default', () => {
    renderWithTheme(<Ribbon>20% off</Ribbon>)
    expect(screen.getByText(/20% off/i)).toHaveStyle({
      height: '3.3rem',
      fontSize: theme.font.sizes.small
    })
  })

  it('should render a small size', () => {
    renderWithTheme(<Ribbon size='small'>20% off</Ribbon>)
    expect(screen.getByText(/20% off/i)).toHaveStyle({
      height: '2.4rem',
      fontSize: theme.font.sizes.xxsmall
    })
  })
})
