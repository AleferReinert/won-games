import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Radio from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Radio />', () => {
  it('should render with white label', () => {
    const { container } = renderWithTheme(
      <Radio label='Radio' labelFor='check' value='anyValue' />
    )
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with black label', () => {
    renderWithTheme(<Radio label='Radio' labelColor='black' />)
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)
    expect(screen.queryByLabelText(/Radio/i)).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label='Radio'
        labelFor='Radio'
        onCheck={onCheck}
        value='anyValue'
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('Radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('Should be accessible with tab', async () => {
    renderWithTheme(<Radio label='Radio' labelFor='Radio' />)

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByLabelText('Radio')).toHaveFocus()
  })
})
