import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import DropdownComponent from './Dropdown'

const meta: Meta<typeof DropdownComponent> = {
  title: 'Components/Dropdown',
  component: DropdownComponent
}

export default meta

type Story = StoryObj<typeof DropdownComponent>

export const Dropdown: Story = {
  args: {
    button: 'My account',
    children: 'children'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.queryByRole('button', { name: /my account/i })
    const children = canvas.getByText('children')

    expect(button).toBeInTheDocument()
    expect(children).not.toBeVisible()

    userEvent.click(button!)

    waitFor(() => {
      expect(children).toBeVisible()
    })
  }
}
