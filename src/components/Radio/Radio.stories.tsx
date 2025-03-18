import { Meta, StoryObj } from '@storybook/react/*'
import { expect, fn, userEvent, within } from '@storybook/test'
import theme from 'styles/theme'
import Radio from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Atoms/Radio',
  component: Radio,
  args: {
    id: 'radio-1',
    name: 'category'
  },
  argTypes: {
    onCheck: {
      // action: 'checked',
      table: { disable: true }
    },
    $labelColor: {
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
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio')
    const labels = canvasElement.getElementsByTagName('label')

    await step('Required attributes id and name', () => {
      expect(radio).toHaveAttribute('id')
      expect(radio).toHaveAttribute('name')
    })

    step('Without label as default', () => {
      expect(labels.length).toBe(0)
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
    const radio = canvas.getByRole('radio')

    await step('Label', () => {
      expect(label).toHaveAttribute('for')
    })

    step('Radio checked on label click', async () => {
      await userEvent.click(label)
      expect(radio).toBeChecked()
    })
  }
}

export const WithBlackLabel: Story = {
  args: {
    label: 'With Black Label',
    $labelColor: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText(/with black label/i)

    step('Label black', () => {
      expect(label).toHaveStyle({ color: theme.colors.black })
    })
  }
}

export const OnCheck: Story = {
  args: {
    value: 'anyValue',
    onCheck: fn()
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio')

    await step('Background with focus', () => {
      expect(document.body).toHaveFocus()
    })

    await step('Radio with focus', async () => {
      await userEvent.tab()
      expect(radio).toHaveFocus()
    })

    step('Function called on check', async () => {
      expect(args.onCheck).not.toHaveBeenCalled()
      await userEvent.click(radio)
      expect(args.onCheck).toHaveBeenCalledTimes(1)
      expect(args.onCheck).toHaveBeenCalledWith('anyValue')
    })
  }
}
