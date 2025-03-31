import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Email, Person } from '@styled-icons/material-outlined'
import theme from 'styles/theme'
import TextField from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/Atoms/TextField',
  component: TextField,
  args: {
    name: 'email'
  },
  argTypes: {
    onInput: {
      action: 'changed',
      table: { disable: true }
    },
    icon: {
      options: ['None', 'Email', 'Person'],
      mapping: {
        None: '',
        Email: <Email />,
        Person: <Person />
      }
    },
    $iconPosition: { if: { arg: 'icon' } },
    name: { table: { disable: true } },
    id: { table: { disable: true } }
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    },
    layout: 'centered'
  },
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')
    const labels = canvasElement.getElementsByTagName('label')

    await step('Required name', () => {
      expect(textField).toHaveAttribute('name', 'email')
    })

    await step('Id value with name', () => {
      expect(textField).toHaveAttribute('id', 'email')
    })

    step('Without label as default', () => {
      expect(labels.length).toBe(0)
    })
  }
}

export const Focus: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')

    await step('Accessibility with tab', async () => {
      expect(document.body).toHaveFocus()
      await userEvent.tab()
      expect(textField).toHaveFocus()
    })

    step('Change text when typing', async () => {
      const newText = 'my new custom value'
      await userEvent.type(textField, newText)
      expect(textField).toHaveValue(newText)
    })
  }
}

export const WithLabel: Story = {
  args: {
    label: 'With label'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(/with label/i)

    await step('Label', () => {
      expect(label).toBeInTheDocument()
    })

    step('Focused input on label click', async () => {
      await userEvent.click(label)
      const textField = canvas.getByRole('textbox')
      expect(textField).toHaveFocus()
    })
  }
}

export const WithIcon: Story = {
  args: {
    icon: <Person role='img' />
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { hidden: true })
    const inputWrapper = icon.parentElement?.parentElement

    await step('Icon', () => {
      expect(icon).toBeVisible()
    })

    step('Icon left position as default', () => {
      expect(inputWrapper).not.toHaveStyle({ 'flex-direction': 'row-reverse' })
    })
  }
}

export const IconRight: Story = {
  args: {
    icon: 'Person',
    $iconPosition: 'right'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputWrapper = canvas.getByRole('textbox').parentElement

    step('Icon right position', () => {
      expect(inputWrapper).toHaveStyle({ 'flex-direction': 'row-reverse' })
    })
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
    value: 'disabled'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(/disabled/i)
    const textField = canvas.getByRole('textbox')

    await step('Input disabled', () => {
      expect(textField).toBeDisabled()
    })

    await step('Styles', () => {
      expect(label).toHaveStyle({
        cursor: 'default',
        color: theme.colors.gray
      })
      expect(textField).toHaveStyle({ cursor: 'default' })
      expect(textField.parentElement).toHaveStyle({ cursor: 'default' })
    })

    await step('Not acessible with tab', async () => {
      expect(document.body).toHaveFocus()
      await userEvent.tab()
      expect(textField).not.toHaveFocus()
    })
  }
}

export const Error: Story = {
  args: {
    errorMessage: 'Ops...something is wrong'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')
    const inputWrapper = textField.parentElement
    const errorMessage = canvas.getByText(/ops...something is wrong/i)

    await step('Red border', () => {
      expect(inputWrapper).toHaveStyle({
        borderColor: theme.colors.error
      })
    })

    await step('Error message with red color', () => {
      expect(errorMessage).toHaveStyle({ color: theme.colors.error })
    })
  }
}

export const InitialValue: Story = {
  args: {
    initialValue: 'Initial value'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')

    step('Initial value', () => {
      expect(textField).toHaveValue('Initial value')
    })
  }
}
