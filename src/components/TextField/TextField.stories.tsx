import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Email, Person } from '@styled-icons/material-outlined'
import TextField from './TextField'
import React from 'react'
import theme from 'styles/theme'
import { hexToRGBA } from 'utils/tests/helpers'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    name: 'email',
    id: 'email'
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
    iconPosition: { if: { arg: 'icon' } },
    name: { table: { disable: true } },
    id: { table: { disable: true } }
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
}
export default meta

type Story = StoryObj<typeof TextField>

export const Playground: Story = {
  args: {
    label: 'E-mail',
    icon: 'Email',
    iconPosition: 'left',
    placeholder: 'email@example.com',
    disabled: false
  }
}

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')
    const labels = canvasElement.getElementsByTagName('label')

    expect(textField).toHaveAttribute('id')
    expect(textField).toHaveAttribute('name')

    // without label as default
    expect(labels.length).toBe(0)
  }
}

export const Focus: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')

    // Accessibility with tab
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(textField).toHaveFocus()

    // change text when typing
    const newText = 'my new custom value'
    await userEvent.type(textField, newText)
    expect(textField).toHaveValue(newText)
    expect(args.onInput).toHaveBeenCalledTimes(newText.length)
    expect(args.onInput).toHaveBeenCalledWith(newText)
  }
}

export const WithLabel: Story = {
  args: {
    label: 'With label'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(/with label/i)

    expect(label).toBeInTheDocument()

    // Input with focus when label is clicked
    await userEvent.click(label)
    const textField = canvas.getByRole('textbox')
    expect(textField).toHaveFocus()

    // reset
    await userEvent.click(document.body)
  }
}

export const WithIcon: Story = {
  args: {
    icon: <Person />
  },
  play: async ({ canvasElement }) => {
    const icon = canvasElement.getElementsByTagName('svg')
    const inputWrapper = icon[0].parentElement?.parentElement

    expect(icon.length).toBe(1)

    // left position as default
    expect(inputWrapper).not.toHaveStyle({ 'flex-direction': 'row-reverse' })
  }
}

export const IconRight: Story = {
  args: {
    icon: 'Person',
    iconPosition: 'right'
  },
  play: async ({ canvasElement }) => {
    const inputWrapper =
      canvasElement.getElementsByTagName('svg')[0].parentElement?.parentElement

    // left position as default
    expect(inputWrapper).toHaveStyle({ 'flex-direction': 'row-reverse' })
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')

    expect(textField).toBeDisabled()
    expect(textField).toHaveStyle({ cursor: 'not-allowed' })
    expect(textField.parentElement).toHaveStyle({ cursor: 'not-allowed' })

    // not be acessible with tab
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(textField).not.toHaveFocus()

    // does not change when typing
    const newText = 'my new text'
    await userEvent.type(textField, newText)
    expect(textField).not.toHaveValue(newText)
  }
}

export const Error: Story = {
  args: {
    errorMessage: 'Ops...something is wrong'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')
    const inputWrapper = textField.parentElement
    const errorMessage = canvas.getByText(/ops...something is wrong/i)

    expect(errorMessage).toHaveStyle({ color: theme.colors.error })

    expect(inputWrapper).toHaveStyle({
      borderColor: hexToRGBA(theme.colors.error)
    })
  }
}

export const InitialValue: Story = {
  args: {
    initialValue: 'Initial value'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textField = canvas.getByRole('textbox')

    expect(textField).toHaveValue('Initial value')
  }
}
