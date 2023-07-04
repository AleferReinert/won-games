import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Radio from './Radio'
import theme from 'styles/theme'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
    id: {
      table: { disable: true }
    },
    name: {
      table: { disable: true }
    },
    value: {
      table: { disable: true }
    }
  },
  render: (args) => (
    <>
      <Radio {...args} id='radio1' />
      <Radio {...args} id='radio2' style={{ margin: '0.5rem 0' }} />
      <Radio {...args} id='radio3' />
    </>
  )
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radios = canvas.getAllByRole('radio')
    const labels = canvasElement.getElementsByTagName('label')

    for (const radio of radios) {
      expect(radio).toHaveAttribute('id')
      expect(radio).toHaveAttribute('name')
    }

    // without label as default
    expect(labels.length).toBe(0)
  }
}

export const Checked: Story = {
  args: {
    value: 'anyValue'
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const radios = canvas.getAllByRole('radio')
    const onCheck = args.onCheck

    // Accessibility with tab
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(radios[0]).toHaveFocus()

    expect(onCheck).not.toHaveBeenCalled()

    for (let i = 0; i < radios.length; i++) {
      // onCheck when click
      await userEvent.click(radios[i])
      await waitFor(() => {
        expect(onCheck).toHaveBeenCalledTimes(i + 1)
        expect(onCheck).toHaveBeenCalledWith('anyValue')
      })
    }
  }
}

export const WithLabel: Story = {
  args: {
    label: 'With Label'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const labels = canvas.getAllByText(/with label/i)
    const radios = canvas.getAllByRole('radio')

    for (let i = 0; i < labels.length; i++) {
      expect(radios[i]).toHaveAttribute('id')
      expect(labels[i]).toHaveAttribute('for')

      // label color white as default
      expect(labels[i]).toHaveStyle({ color: theme.colors.white })

      // radio checked on label click
      await userEvent.click(labels[i])
      expect(radios[i]).toBeChecked()
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
