import { screen } from '@testing-library/react'
import Empty, { EmptyProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props: EmptyProps = {
  title: 'my title',
  description: 'my description'
}

describe('<Empty />', () => {
  it('should render img, title and description without link', () => {
    const { container } = renderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('img', {
        name: /a person on a couch playing video games/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(
      screen.queryByRole('link', {
        name: /go back to store/i
      })
    ).not.toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render with link (label required)', () => {
    renderWithTheme(<Empty {...props} link='/' label='Go back to store' />)

    expect(
      screen.getByRole('link', {
        name: /go back to store/i
      })
    ).toHaveAttribute('href', props.link)
  })
})
