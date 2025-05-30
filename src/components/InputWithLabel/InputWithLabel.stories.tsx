import { Meta, StoryObj } from '@storybook/react/*'
import { expect, within } from '@storybook/test'
import { InputWithLabel } from './InputWithLabel'

const meta: Meta<typeof InputWithLabel> = {
  title: 'Components/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof InputWithLabel>

export const Checkbox: Story = {
  args: {
    label: 'Checkbox',
    type: 'checkbox'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Type checkbox', () => {
      const checkbox = canvas.getByRole('checkbox')
      expect(checkbox).toBeVisible()
    })

    await step('Label', () => {
      const label = canvas.getByText('Checkbox')
      expect(label).toBeVisible()
    })
  }
}

export const Radio: Story = {
  args: {
    label: 'Radio',
    type: 'radio'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Type radio', () => {
      const radio = canvas.getByRole('radio')
      expect(radio).toBeVisible()
    })
  }
}
