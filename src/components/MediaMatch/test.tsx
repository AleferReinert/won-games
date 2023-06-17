import { screen } from '@testing-library/react'
import MediaMatch from '.'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    renderWithTheme(
      <>
        <MediaMatch greaterThan='small'>
          <h1 data-testid='desktop'>Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan='small'>
          <h1 data-testid='mobile'>Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('hidden on mobile and desktop', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should display only between media', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: `(min-width: ${theme.breakpoint.small})`
    })

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: `(max-width: ${theme.breakpoint.small})`
    })
  })
})
