import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import BoxComponent from './Box'

const meta: Meta<typeof BoxComponent> = {
  title: 'Components/Atoms/Box',
  component: BoxComponent,
  args: {
    children: <h1>Children</h1>
  },
  argTypes: {
    children: { table: { disable: true } }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof BoxComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByRole('heading', { name: /children/i })
    const wrapper = children.parentElement

    await step('Children', () => {
      expect(children).toBeInTheDocument()
    })

    await step('Padding small as default', () => {
      expect(wrapper).toHaveStyle({ padding: remToPx(theme.spacings.small) })
    })
  }
}

export const Xsmall: Story = {
  args: {
    $padding: 'xsmall'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Padding xsmall', () => {
      const wrapper = canvas.getByRole('heading', { name: /children/i }).parentElement
      expect(wrapper).toHaveStyle({ padding: remToPx(theme.spacings.xsmall) })
    })
  }
}

export const Medium: Story = {
  args: {
    $padding: 'medium'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Padding medium', () => {
      const wrapper = canvas.getByRole('heading', { name: /children/i }).parentElement
      expect(wrapper).toHaveStyle({ padding: remToPx(theme.spacings.medium) })
    })
  }
}
