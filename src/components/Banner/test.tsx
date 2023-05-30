import { screen } from '@testing-library/react'
import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: 'Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('Renderizar banner', () => {
    renderWithTheme(<Banner {...props} />)

    // Titulo
    expect(
      screen.getByRole('heading', {
        name: /Defy death/i
      })
    ).toBeInTheDocument()

    // Subtitulo
    expect(screen.getByText(/Play the new/i)).toBeInTheDocument()

    // Imagem
    expect(screen.getByRole('img', { name: /Defy death/i }))
  })
})
