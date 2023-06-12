import { screen } from '@testing-library/react'
import Base from '.'
import { renderWithTheme } from 'utils/tests/helpers'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Menu'></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid='Mock Footer'></div>
    }
  }
})

describe('<Base />', () => {
  it('Renderizar Menu, Footer e children', () => {
    const { debug } = renderWithTheme(<Base>children</Base>)

    debug()
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByText('children')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
