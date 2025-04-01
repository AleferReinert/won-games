import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import theme from 'styles/theme'
import AlertComponent from './Alert'

const meta: Meta<typeof AlertComponent> = {
  title: 'Components/Atoms/Alert',
  component: AlertComponent,
  args: {
    children: 'Lorem ipsum dolor sit amet.'
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'Light'
    }
  }
}

export default meta

type Story = StoryObj<typeof AlertComponent>

export const Default: Story = {
  name: 'Error (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Required children', () => {
      const children = canvas.getByText(/lorem ipsum dolor sit amet/i)
      expect(children).toBeVisible()
    })

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveStyle({ 'border-color': theme.colors.error })
      expect(alert).toHaveStyle({ color: theme.colors.error })
      expect(alert).toHaveStyle({ 'background-color': theme.colors.error + '33' })
    })
  }
}

export const Success: Story = {
  args: {
    variant: 'success'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveStyle({ 'border-color': theme.colors.success })
      expect(alert).toHaveStyle({ color: theme.colors.success })
      expect(alert).toHaveStyle({ 'background-color': theme.colors.success + '33' })
    })
  }
}

export const Info: Story = {
  args: {
    variant: 'info'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveStyle({ 'border-color': theme.colors.info })
      expect(alert).toHaveStyle({ color: theme.colors.info })
      expect(alert).toHaveStyle({ 'background-color': theme.colors.info + '33' })
    })
  }
}

export const Warning: Story = {
  args: {
    variant: 'warning'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveStyle({ 'border-color': theme.colors.warning })
      expect(alert).toHaveStyle({ color: theme.colors.warning })
      expect(alert).toHaveStyle({ 'background-color': theme.colors.warning + '33' })
    })
  }
}
