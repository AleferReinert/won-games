import { screen } from '@testing-library/react'
import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Heading />', () => {
  it('should render white color as default ', () => {
    renderWithTheme(<Heading>Most populars</Heading>)
    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        color: theme.colors.white
      }
    )
  })

  it('should render black color', () => {
    renderWithTheme(<Heading color='black'>Most populars</Heading>)
    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        color: theme.colors.black
      }
    )
  })

  it('should render line left', () => {
    renderWithTheme(<Heading lineLeft>Most populars</Heading>)
    expect(screen.getByRole('heading', { name: /most populars/i })).toHaveStyle(
      {
        'border-left': `0.7rem solid ${theme.colors.primary}`
      }
    )
  })

  it('should render line bottom', () => {
    renderWithTheme(<Heading lineBottom>Most populars</Heading>)
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('should render a small size', () => {
    renderWithTheme(<Heading size='small'>Most populars</Heading>)
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('font-size', theme.font.sizes.medium)
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('width', `3rem`, {
      modifier: '::after'
    })
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('border-bottom-width', `0.4rem`, {
      modifier: '::after'
    })
  })

  it('should render lines with secondary color', () => {
    renderWithTheme(
      <Heading lineColor='secondary' lineLeft lineBottom>
        Most Populars
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /most populars/i })

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })
    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a huge size', () => {
    renderWithTheme(<Heading size='huge'>Most populars</Heading>)
    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('font-size', theme.font.sizes.huge)
  })
})
