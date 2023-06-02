import { screen } from '@testing-library/react'
import Highlight from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import * as S from './styles'

const props = {
  title: 'lorem ipsum',
  description: 'dolor sit amet',
  buttonLabel: 'buy now',
  buttonLink: '/link',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('Renderizar titulo, botão e descrição', () => {
    renderWithTheme(<Highlight {...props} />)

    // Titulo
    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toBeInTheDocument()

    // Descrição curta
    expect(screen.getByText(/dolor sit amet/i)).toBeInTheDocument()

    // Botão
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('Imagem de fundo', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('Imagem flutuante', () => {
    renderWithTheme(<Highlight {...props} floatImage='/float-image.png' />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('Texto alinhado a direita por padrão', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('Texto alinhado a esquerda', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment='left' />
    )
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
