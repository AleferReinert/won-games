import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { creditCardsMock } from 'mocks/creditCards.mock'
import theme from 'styles/theme'
import CreditCardComponent from './CreditCard'

const meta: Meta<typeof CreditCardComponent> = {
  title: 'Components/Atoms/CreditCard',
  component: CreditCardComponent,
  args: creditCardsMock[0],
  parameters: {
    backgrounds: {
      default: 'Light'
    },
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CreditCardComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img')
    const number = canvas.getByText(/\*\*\*\* \*\*\*\* \*\*\*\*/)
    const wrapper = img.parentElement

    await step('Accessible name', () => {
      expect(img).toHaveAccessibleName(/visa/i)
    })

    await step('Number', () => {
      expect(number).toBeInTheDocument()
    })

    step('Color black and direction left as default', () => {
      expect(wrapper).toHaveStyle({
        color: theme.colors.black,
        flexDirection: 'row'
      })
    })
  }
}

export const Gray: Story = {
  args: {
    color: 'gray'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Color gray', () => {
      const wrapper = canvas.getByRole('img').parentElement
      expect(wrapper).toHaveStyle({ color: theme.colors.gray })
    })
  }
}

export const Right: Story = {
  args: {
    direction: 'right'
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Direction right', () => {
      const wrapper = canvas.getByRole('img').parentElement
      expect(wrapper).toHaveStyle({ flexDirection: 'row-reverse' })
    })
  }
}
