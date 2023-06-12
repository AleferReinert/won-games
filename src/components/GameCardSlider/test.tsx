import 'match-media-mock'
import { screen } from '@testing-library/react'
import GameCardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import items from './mock'

describe('<GameCardSlider />', () => {
  it('should render black arrows', () => {
    renderWithTheme(<GameCardSlider items={items} arrowColor='black' />)
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })
})
