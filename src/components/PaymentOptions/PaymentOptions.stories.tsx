import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import PaymentOptionsComponent from './PaymentOptions'
import creditCardsMock from './mock'

const meta: Meta<typeof PaymentOptionsComponent> = {
  title: 'Components/PaymentOptions',
  component: PaymentOptionsComponent,
  argTypes: {
    creditCards: { table: { disable: true } },
    handlePayment: { action: 'button enabled', table: { disable: true } }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '39rem' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof PaymentOptionsComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: /payment/i })
    const buttonAddNewCreditCard = canvas.getByRole('button', {
      name: /add new credit card/i
    })
    const buttonContinueShopping = canvas.getByRole('button', {
      name: /continue shopping/i
    })
    const buttonBuyNow = canvas.getByRole('button', { name: /buy now/i })

    expect(title).toBeInTheDocument()
    expect(buttonAddNewCreditCard).toBeInTheDocument()
    expect(buttonContinueShopping).toBeInTheDocument()
    expect(buttonBuyNow).toBeDisabled()
  }
}

export const WithCreditCards: Story = {
  args: {
    creditCards: creditCardsMock
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const creditCards = canvas.getAllByRole('listitem')
    const radios = canvas.getAllByRole('radio')

    expect(creditCards.length).toBeGreaterThan(0)

    // First credit card selected as default
    expect(radios[0]).toBeChecked()
  }
}
