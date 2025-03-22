import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { creditCardsMock } from '../../mocks/creditCards.mock'
import PaymentOptionsComponent from './PaymentOptions'

const meta: Meta<typeof PaymentOptionsComponent> = {
  title: 'Components/PaymentOptions',
  component: PaymentOptionsComponent,
  argTypes: {
    creditCards: { table: { disable: true } },
    handlePayment: { action: 'button enabled', table: { disable: true } }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PaymentOptionsComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('HeadingComponent', () => {
      const headingComponent = canvas.getByTestId('HeadingComponent')
      expect(headingComponent).toHaveTextContent('Payment')
    })

    await step('Button add new credit card with icon', () => {
      const button = canvas.getByRole('button', { name: /add new credit card/i })
      const icon = within(button).getByRole('img', { hidden: true })
      expect(button).toBeVisible()
      expect(icon).toBeVisible()
    })

    await step('Button link to continue shopping', () => {
      const buttonLink = canvas.getByRole('link', { name: /continue shopping/i })
      expect(buttonLink).toHaveAttribute('href', '/products')
    })

    await step('Button buy now disabled and with icon', () => {
      const buttonBuyNow = canvas.getByRole('button', { name: /buy now/i })
      const icon = within(buttonBuyNow).getByRole('img', { hidden: true })
      expect(buttonBuyNow).toBeDisabled()
      expect(icon).toBeVisible()
    })
  }
}

export const WithCreditCards: Story = {
  args: {
    creditCards: creditCardsMock
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const creditCardComponents = canvas.getAllByTestId('CreditCardComponent')

    await step('Credit card components', () => {
      expect(creditCardComponents.length).toBeGreaterThan(0)
    })

    await step('First credit card selected', () => {
      const firstInputRadio = canvas.getAllByRole('radio')[0]
      expect(firstInputRadio).toBeChecked()
    })

    await step('Button buy now enabled', () => {
      const buttonBuyNow = canvas.getByRole('button', { name: /buy now/i })
      expect(buttonBuyNow).not.toBeDisabled()
    })
  }
}
