import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import theme from 'styles/theme'

describe('<Logo />', () => {
  it('should render white color as default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black', () => {
    renderWithTheme(<Logo color='black' />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a normal size as default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a large size', () => {
    renderWithTheme(<Logo size='large' />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render without text on mobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: `(max-width: ${theme.breakpoint.smallLess})` }
    )
  })

  it('should render with id', () => {
    const { container } = renderWithTheme(<Logo id='a' />)
    expect(container.querySelector('#gradient-a')).toBeInTheDocument()
  })
})
