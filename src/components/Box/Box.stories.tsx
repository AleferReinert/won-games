import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: 'Components/Atoms/Box',
  component: Box,
  args: {
    children: <h1>Children</h1>
  },
  argTypes: {
    children: { table: { disable: true } }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Box>

export const Xsmall: Story = {
  args: {
    size: 'xsmall'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Padding xsmall', () => {
      const wrapper = canvas.getByRole('heading', { name: /children/i }).parentElement
      expect(wrapper).toHaveStyle({ padding: '16px' })
    })
  }
}

export const Small: Story = {
  name: 'Small (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByRole('heading', { name: /children/i })
    const wrapper = children.parentElement

    await step('Children', () => {
      expect(children).toBeInTheDocument()
    })

    await step('Padding small as default', () => {
      expect(wrapper).toHaveStyle({ padding: '24px' })
    })
  }
}

export const Medium: Story = {
  args: {
    size: 'medium'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Padding medium', () => {
      const wrapper = canvas.getByRole('heading', { name: /children/i }).parentElement
      expect(wrapper).toHaveStyle({ padding: '32px' })
    })
  }
}
