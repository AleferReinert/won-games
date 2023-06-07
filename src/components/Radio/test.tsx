import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Radio from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Radio />', () => {
  it('Com label branca', () => {
    const { container } = renderWithTheme(
      <Radio label='Radio' labelFor='check' value='anyValue' />
    )
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Com label preta', () => {
    renderWithTheme(<Radio label='Radio' labelColor='black' />)
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('Sem label', () => {
    renderWithTheme(<Radio />)
    expect(screen.queryByLabelText(/Radio/i)).not.toBeInTheDocument()
  })

  it('Label preta', () => {
    renderWithTheme(
      <Radio label='lorem ipsum' labelFor='dolor' labelColor='black' />
    )
    expect(screen.queryByText(/lorem ipsum/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('Função oncheck ao mudar status', async () => {
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

  it('Acessibilidade com tab', async () => {
    renderWithTheme(<Radio label='Radio' labelFor='Radio' />)

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByLabelText('Radio')).toHaveFocus()
  })
})
