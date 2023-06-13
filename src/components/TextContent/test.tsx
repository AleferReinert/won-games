import { screen } from '@testing-library/react'
import TextContent from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import { defaultBreakpoints } from 'styled-media-query'

const props = {
  title: 'Description',
  content: `<h1>content</h1>`
}

describe('<TextContent />', () => {
  it('should render with title', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render styles from mobile and desktop', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({ color: theme.colors.white })
    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: `(min-width: ${defaultBreakpoints.medium})`
    })
    expect(wrapper).toHaveStyleRule('background-color', theme.colors.white, {
      media: `(min-width: ${defaultBreakpoints.medium})`
    })
  })
})
