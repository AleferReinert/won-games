import { screen } from '@testing-library/react'
import Auth from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Auth />', () => {
  it('should render logo, title, description and footer in banner block', () => {
    renderWithTheme(<Auth title='Sign in'>children</Auth>)

    expect(screen.getAllByLabelText(/won games/i)[0]).toBeInTheDocument()
    expect(
      screen.getByText(/all your favorites games in one place/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/is the best and most complete gaming platform/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Won Games 2023 © Todos os Direitos Reservados/i)
    ).toBeInTheDocument()
  })
  it('should render logo, title and children in auth block', () => {
    renderWithTheme(<Auth title='Sign in'>children</Auth>)

    expect(screen.getAllByLabelText(/won games/i)[1]).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument()
    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
