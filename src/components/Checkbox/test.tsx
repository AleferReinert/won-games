import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label='lorem ipsum' labelFor='dolor' />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toHaveAttribute('for', 'dolor')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByLabelText(/lorem ipsum/i)).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label='lorem ipsum' labelFor='dolor' labelColor='black' />
    )
    expect(screen.queryByText(/lorem ipsum/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label='lorem ipsum' onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should call onCheck with false if the Checkbox is already checked', async () => {
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

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label='lorem ipsum' labelFor='dolor' />)

    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
