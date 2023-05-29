import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import 'jest-styled-components'
import theme from 'styles/theme'

describe('<Logo />', () => {
  it('Logo branca como padrão', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('Logo preta', () => {
    renderWithTheme(<Logo color='black' />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('Logo com tamanho normal', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('Logo com tamanho maior', () => {
    renderWithTheme(<Logo size='large' />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('Logo sem texto no mobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' }
    )
  })
})
