import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import 'jest-styled-components'

describe('<Logo />', () => {
  it('renderizar logo branca por padrão', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('renderizar logo preta quando a cor for passada', () => {
    renderWithTheme(<Logo color='black' />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('renderizar logo em tamanho normal', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('renderizar logo em tamanho maior', () => {
    renderWithTheme(<Logo size='large' />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('renderizar logo sem texto no mobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' }
    )
  })
})
