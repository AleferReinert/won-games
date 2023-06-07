import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Checkbox />', () => {
  it('Com label', () => {
    const { container } = renderWithTheme(
      <Checkbox label='lorem ipsum' labelFor='dolor' />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toHaveAttribute('for', 'dolor')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Sem label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByLabelText(/lorem ipsum/i)).not.toBeInTheDocument()
  })

  it('Label preta', () => {
    renderWithTheme(
      <Checkbox label='lorem ipsum' labelFor='dolor' labelColor='black' />
    )
    expect(screen.queryByText(/lorem ipsum/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('Função oncheck ao mudar status', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label='lorem ipsum' onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('Verifica se está checado', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Checkbox label='lorem ipsum' onCheck={onCheck} isChecked />
    )

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('Acessibilidade com tab', async () => {
    renderWithTheme(<Checkbox label='lorem ipsum' labelFor='dolor' />)

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
