import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import MainLayout from './layout'

const meta: Meta<typeof MainLayout> = {
  title: 'Layouts/Main',
  component: MainLayout,
  args: {
    children: <p className='text-center text-zinc-50'>Required children</p>
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof MainLayout>

export const Main: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Header', () => {
      waitFor(() => {
        const header = canvas.getByRole('banner')
        expect(header).toBeVisible()
      })
    })

    await step('Required children', () => {
      waitFor(() => {
        const children = canvas.getByText(/required children/i)
        expect(children).toBeVisible()
      })
    })

    await step('Footer', () => {
      waitFor(() => {
        const footer = canvas.getByRole('contentinfo')
        expect(footer).toBeVisible()
      })
    })
  }
}
