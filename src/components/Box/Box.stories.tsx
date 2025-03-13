import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
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
  }
}

export default meta

type Story = StoryObj<typeof BoxComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByRole('heading', { name: /children/i })
    const box = children.parentElement

    expect(children).toBeInTheDocument()

    // Padding small as default
    expect(box).toHaveStyle({ padding: remToPx(theme.spacings.small) })
  }
}

export const Xsmall: Story = {
  args: {
    $padding: 'xsmall'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByRole('heading', { name: /children/i })
    const box = children.parentElement

    expect(box).toHaveStyle({ padding: remToPx(theme.spacings.xsmall) })
  }
}

export const Medium: Story = {
  args: {
    $padding: 'medium'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByRole('heading', { name: /children/i })
    const box = children.parentElement

    expect(box).toHaveStyle({ padding: remToPx(theme.spacings.medium) })
  }
}
