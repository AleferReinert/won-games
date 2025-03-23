import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import DropdownComponent from './Dropdown'

const meta: Meta<typeof DropdownComponent> = {
  title: 'Components/Dropdown',
  component: DropdownComponent,
  decorators: [(story) => <div style={{ height: '80px' }}>{story()}</div>],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof DropdownComponent>

export const Dropdown: Story = {
  args: {
    button: 'My account',
    children: 'children'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /my account/i })
    const children = canvas.getByText('children')

    await step('Button', () => {
      expect(button).toBeVisible()
    })

    await step('Hidden children', () => {
      expect(children).not.toBeVisible()
    })

    await step('Show children on click button', async () => {
      userEvent.click(button)
      await waitFor(() => expect(children).toBeVisible())
    })

    await step('Hidden children on second click button', async () => {
      userEvent.click(button)
      await waitFor(() => expect(children).not.toBeVisible())
    })

    await step('Overlay visible on click button', async () => {
      const overlay = canvas.getByTestId('DropdownOverlay')
      expect(overlay).not.toBeVisible()
      userEvent.click(button)
      await waitFor(() => expect(overlay).toBeVisible())
    })

    await step('Close dropdown on overlay click', async () => {
      const overlay = canvas.getByTestId('DropdownOverlay')
      userEvent.click(overlay)
      await waitFor(() => {
        expect(children).not.toBeVisible()
        expect(overlay).not.toBeVisible()
      })
    })
  }
}
