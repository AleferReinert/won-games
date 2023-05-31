import { screen } from '@testing-library/react'
import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

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

  it('Renderizar o Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon='20% off'
        ribbonSize='small'
        ribbonColor='secondary'
      />
    )

    const Ribbon = screen.getByText(/20% off/i)

    expect(Ribbon).toBeInTheDocument()
    expect(Ribbon).toHaveStyle({ backgroundColor: theme.colors.secondary })
    expect(Ribbon).toHaveStyle({
      height: '2.4rem',
      fontSize: theme.font.sizes.xxsmall
    })
  })
})
