import { screen } from '@testing-library/react'
import Highlight from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import * as S from './styles'
import props from './mock'

describe('<Highlight />', () => {
  it('should render title, description and link', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: props.buttonLabel })
    ).toHaveAttribute('href', props.buttonLink)
  })

  it('should render a background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render a flot image', () => {
    renderWithTheme(<Highlight {...props} floatImage={props.floatImage} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.floatImage
    )
  })

  it('should render text align right as default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render text align left', () => {
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
