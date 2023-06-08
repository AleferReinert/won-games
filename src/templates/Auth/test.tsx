import { screen } from '@testing-library/react'
import Auth from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Auth />', () => {
  it('Renderizar todos elementos', () => {
    renderWithTheme(
      <Auth title='Sign in'>
        <input type='text' />
      </Auth>
    )

    // 2 logos
    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)

    // Heading do banner
    expect(
      screen.getByText(/all your favorites games in one place/i)
    ).toBeInTheDocument()

    // Description do banner
    expect(
      screen.getByText(/is the best and most complete gaming platform/i)
    ).toBeInTheDocument()

    // Footer do banner
    expect(
      screen.getByText(/Won Games 2023 © Todos os Direitos Reservados/i)
    ).toBeInTheDocument()

    // Title do Auth
    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument()

    // Children do Auth
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
