import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { getTailwindValue } from 'utils/getTailwindValue'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  args: {
    id: 'category'
  },
  argTypes: {
    onCheck: {
      action: 'checked',
      table: { disable: true }
    },
    labelColor: {
      if: { arg: 'label' }
    },
    name: {
      table: { disable: true }
    },
    id: {
      table: { disable: true }
    },
    isChecked: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    const label = canvasElement.getElementsByTagName('label')

    await step('Id', () => {
      expect(checkbox).toHaveAttribute('id')
    })

    step('Without label as default', () => {
      expect(label.length).toBe(0)
    })
  }
}

export const Checked: Story = {
  args: {
    isChecked: true
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    await step('Body with focus', () => {
      expect(document.body).toHaveFocus()
    })

    await step('Checkbox with focus', async () => {
      await userEvent.tab()
      expect(checkbox).toHaveFocus()
    })

    await step('Checkbox checked', () => {
      expect(checkbox).toBeChecked()
    })

    await step('Checkbox not checked', async () => {
      await userEvent.click(checkbox)
      expect(checkbox).not.toBeChecked()
    })
  }
}

export const WithLabel: Story = {
  args: {
    label: 'With Label'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(/with label/i)

    await step('Label	with for', () => {
      expect(label).toHaveAttribute('for')
    })

    step('Label	with color white as default', () => {
      expect(label).toHaveStyle({ color: getTailwindValue('--color-zinc-50') })
    })
  }
}

export const WithBlackLabel: Story = {
  args: {
    label: 'With Black Label',
    labelColor: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(/with black label/i)

    step('Label	with color black', () => {
      expect(label).toHaveStyle({ color: getTailwindValue('--color-theme-gray-950') })
    })
  }
}
