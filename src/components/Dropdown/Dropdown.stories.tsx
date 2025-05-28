import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [(story) => <div style={{ height: '80px' }}>{story()}</div>],
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  name: 'Dropdown',
  args: {
    buttonContent: (
      <div className='relative bg-transparent leading-0'>
        <div
          aria-label='Cart items'
          className='absolute -top-[5px] -right-[5px] rounded-full text-white size-4 bg-theme-secondary leading-4 text-[10px] font-semibold text-center'
        >
          12
        </div>
        <MdOutlineShoppingCart role='img' aria-hidden className='fill-zinc-50 size-6' />
      </div>
    ),
    buttonTitle: 'Shopping cart',
    children: 'children'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /shopping cart/i })
    const children = canvas.getByText('children')

    await step('Button content and title', () => {
      expect(button).toBeVisible()
      expect(button).toHaveAttribute('title', 'Shopping cart')
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
