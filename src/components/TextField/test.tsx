import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextField from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { Email } from '@styled-icons/material-outlined'

describe('<TextField />', () => {
  it('Com label', () => {
    renderWithTheme(<TextField label='Label' labelFor='Field' id='Field' />)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('Sem label', () => {
    renderWithTheme(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Com placeholder', () => {
    renderWithTheme(<TextField placeholder='lorem ipsum' />)
    expect(screen.queryByPlaceholderText('lorem ipsum')).toBeInTheDocument()
  })

  it('Alterar valor ao digitar', async () => {
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

  it('Acessibilidade com tab', async () => {
    renderWithTheme(
      <TextField label='TextField' labelFor='TextField' id='TextField' />
    )

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByLabelText('TextField')).toHaveFocus()
  })

  it('Com icone a esquerda por padrão', () => {
    renderWithTheme(<TextField icon={<Email data-testid='icon' />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Com icone a direita', () => {
    renderWithTheme(
      <TextField iconPosition='right' icon={<Email data-testid='icon' />} />
    )

    expect(
      screen.getByRole('textbox').parentElement as HTMLElement
    ).toHaveStyle({ flexDirection: 'row-reverse' })
  })

  it('Desabilitado', () => {
    renderWithTheme(<TextField disabled />)

    expect(screen.getByRole('textbox')).toHaveAttribute('disabled')
  })

  it('Não altera o texto quando desabilitado', async () => {
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
    expect(input).toBeDisabled()

    const text = 'New text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Não acessível via tab quando desabilitado', async () => {
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

  it('Com mensagem de erro', async () => {
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
})
