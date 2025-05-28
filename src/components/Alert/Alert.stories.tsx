import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { getTailwindValue } from 'utils/getTailwindValue'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Atoms/Alert',
  component: Alert,
  args: {
    children: <p>Lorem ipsum dolor sit amet.</p>
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

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  name: 'Error (default)',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByRole('alert')

    await step('Required children', () => {
      const children = canvas.getByText(/lorem ipsum dolor sit amet/i)
      expect(children).toBeVisible()
    })

    await step('Border left', () => {
      expect(alert).toHaveStyle('border-left-width: 4px')
    })

    await step('Font size 16px', () => {
      expect(alert).toHaveStyle('font-size: 16px')
    })

    await step('Colors', () => {
      const alert = canvas.getByRole('alert')
      expect(alert).toHaveStyle({ 'border-color': getTailwindValue('--color-red-900') })
      expect(alert).toHaveStyle({ color: getTailwindValue('--color-red-900') })
      expect(alert).toHaveStyle({ 'background-color': getTailwindValue('--color-red-100') })
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
      expect(alert).toHaveStyle({ 'border-color': getTailwindValue('--color-green-900') })
      expect(alert).toHaveStyle({ color: getTailwindValue('--color-green-900') })
      expect(alert).toHaveStyle({ 'background-color': getTailwindValue('--color-green-100') })
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
      expect(alert).toHaveStyle({ 'border-color': getTailwindValue('--color-sky-900') })
      expect(alert).toHaveStyle({ color: getTailwindValue('--color-sky-900') })
      expect(alert).toHaveStyle({ 'background-color': getTailwindValue('--color-sky-100') })
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
      expect(alert).toHaveStyle({ 'border-color': getTailwindValue('--color-amber-900') })
      expect(alert).toHaveStyle({ color: getTailwindValue('--color-amber-900') })
      expect(alert).toHaveStyle({ 'background-color': getTailwindValue('--color-amber-100') })
    })
  }
}

export const Small: Story = {
  args: {
    size: 'small'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByRole('alert')

    await step('Font size 14px', () => {
      expect(alert).toHaveStyle('font-size: 14px')
    })
  }
}

export const HideBorderLeft: Story = {
  args: {
    hideBorderLeft: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByRole('alert')

    await step('Border left 0', () => {
      expect(alert).toHaveStyle('border-left-width: 0px')
    })
  }
}
