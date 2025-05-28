import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Atoms/Container',
  component: Container,
  args: {
    children: <div className='bg-theme-gray-100 py-20 text-center items-center justify-center flex'>children</div>
  }
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  name: 'Container',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByText(/children/i)

    await step('Children', () => {
      expect(children).toBeInTheDocument()
    })
  }
}
