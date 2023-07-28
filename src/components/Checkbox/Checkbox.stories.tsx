import type { StoryObj, Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Checkbox from './Checkbox'
import theme from 'styles/theme'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  args: {
    name: 'category'
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
  render: (args) => (
    <>
      <Checkbox {...args} id='checkbox1' />
      <Checkbox {...args} id='checkbox2' style={{ margin: '0.5rem 0' }} />
      <Checkbox {...args} id='checkbox3' />
    </>
  )
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')
    const labels = canvasElement.getElementsByTagName('label')

    for (const checkbox of checkboxes) {
      expect(checkbox).toHaveAttribute('id')
    }

    // without label as default
    expect(labels.length).toBe(0)
  }
}

export const Checked: Story = {
  args: {
    isChecked: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')

    expect(document.body).toHaveFocus()

    for (const checkbox of checkboxes) {
      // Accessibility with tab
      await userEvent.tab()
      expect(checkbox).toHaveFocus()

      // Checked test
      expect(checkbox).toBeChecked()
      await userEvent.click(checkbox)
      expect(checkbox).not.toBeChecked()
      await userEvent.click(checkbox)
      expect(checkbox).toBeChecked()
    }
  }
}

export const WithLabel: Story = {
  args: {
    label: 'With Label'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const labels = canvas.getAllByText(/with label/i)
    const checkboxes = canvas.getAllByRole('checkbox')

    for (let i = 0; i < labels.length; i++) {
      expect(checkboxes[i]).toHaveAttribute('id')
      expect(labels[i]).toHaveAttribute('for')

      // label white as default
      expect(labels[i]).toHaveStyle({ color: theme.colors.white })
    }
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const labels = canvas.getAllByText(/with black label/i)

    for (const label of labels) {
      expect(label).toHaveStyle({ color: theme.colors.black })
    }
  }
}
