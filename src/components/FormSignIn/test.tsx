import { screen } from '@testing-library/react'
import FormSignIn from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FormSignIn />', () => {
  it('Renderizar formulário', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /forgot your password\?/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/don't have an account\?/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /sign up/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })
})
