import { screen } from '@testing-library/react'
import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import props from './mock'

describe('<Banner />', () => {
  it('should render title, subtitle and img', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', {
        name: props.title
      })
    ).toBeInTheDocument()
    expect(container).toHaveTextContent(props.subtitle.slice(0, 12))
    expect(screen.getByRole('img', { name: props.title }))
  })

  it('should render the Ribbon', () => {
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
