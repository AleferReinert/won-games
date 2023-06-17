import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameDetails from '.'
import gameDetailsMock from './mock'

describe('<GameDetails />', () => {
  it('should render the titles', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /category/i })
    ).toBeInTheDocument()
  })

  it('should render formatted date', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />)
    expect(screen.getByText('Sep 13, 2019')).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />)
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating='BR0' />)
    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} rating='BR18' />)
    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render genres', () => {
    renderWithTheme(<GameDetails {...gameDetailsMock} />)
    expect(screen.getByText('Action / Adventure')).toBeInTheDocument()
  })
})
