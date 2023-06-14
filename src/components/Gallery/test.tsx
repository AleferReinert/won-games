import 'match-media-mock'
import { screen } from '@testing-library/react'
import Gallery from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import mock from './mock'
import fireEvent from '@testing-library/user-event'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: 'Thumb ' + mock[0].label })
    ).toHaveAttribute('src')
    expect(
      screen.getByRole('button', { name: 'Thumb ' + mock[1].label })
    ).toHaveAttribute('src')
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb ' + mock[0].label })
    )

    const img = await screen.findByRole('img', { name: mock[0].label })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle open/close modal', async () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    const thumb = screen.getByRole('button', {
      name: 'Thumb ' + mock[0].label
    })
    const modal = screen.getByLabelText('modal')

    // check if modal is hidden
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: '0' })

    // check if modal is open on thumb click
    await fireEvent.click(thumb)
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: '1' })

    // check if modal is hidden on closeButton click
    await fireEvent.click(screen.getByLabelText(/close modal/i))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: '0' })

    // check if modal is hidden on press Esc
    await fireEvent.click(thumb)
    await fireEvent.keyboard('{Escape}')
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: '0' })
  })
})
