import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextField from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { Email } from '@styled-icons/material-outlined'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label='Label' labelFor='Field' id='Field' />)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder='lorem ipsum' />)
    expect(screen.queryByPlaceholderText('lorem ipsum')).toBeInTheDocument()
  })

  it('Change its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        label='TextField'
        labelFor='TextField'
        onInput={onInput}
        id='TextField'
      />
    )
    const input = screen.getByRole('textbox')
    const text = 'My new text'

    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('does not change its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        disabled
        onInput={onInput}
        label='TextField'
        labelFor='TextField'
        id='TextField'
      />
    )
    const input = screen.getByRole('textbox')
    const text = 'New text'

    expect(input).toBeDisabled()
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('should render with left icon as default', () => {
    renderWithTheme(<TextField icon={<Email data-testid='icon' />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with right icon', () => {
    renderWithTheme(
      <TextField iconPosition='right' icon={<Email data-testid='icon' />} />
    )

    expect(
      screen.getByRole('textbox').parentElement as HTMLElement
    ).toHaveStyle({ flexDirection: 'row-reverse' })
  })

  it('should render disabled', () => {
    renderWithTheme(<TextField disabled />)

    expect(screen.getByRole('textbox')).toHaveAttribute('disabled')
  })

  it('should render with error message', async () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid='icon' />}
        label='TextField'
        labelFor='TextField'
        error='Error message'
      />
    )

    expect(screen.getByText(/error message/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be acessible with tab', async () => {
    renderWithTheme(
      <TextField label='TextField' labelFor='TextField' id='TextField' />
    )

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByLabelText('TextField')).toHaveFocus()
  })

  it('should not be acessible with tab when disabled', async () => {
    renderWithTheme(
      <TextField
        disabled
        label='TextField'
        labelFor='TextField'
        id='TextField'
      />
    )
    const input = screen.getByRole('textbox')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
