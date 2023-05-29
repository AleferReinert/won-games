import { fireEvent, screen } from '@testing-library/react'
import Menu from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Menu />', () => {
  it('Renderizar menu', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('Abrir e fechar menu', () => {
    renderWithTheme(<Menu />)

    // Seleciona o menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // Verifica se está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // Clica no botão de abrir e verifica se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // Clica no botão de fecchar e verifica se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('Não autenticado: esconder my account/wishlist e mostrar login/signup', () => {
    renderWithTheme(<Menu />)
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })

  it('Autenticado: mostrar my account/wishlist e esconder login/signup', () => {
    renderWithTheme(<Menu username='john' />)
    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
