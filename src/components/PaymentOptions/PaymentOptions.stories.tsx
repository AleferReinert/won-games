import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import PaymentOptionsComponent from './PaymentOptions'

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
    creditCards: [
      {
        flag: 'visa',
        number: '**** **** **** 7937',
        img: 'img/creditCards/visa.png'
      },
      {
        flag: 'mastercard',
        number: '**** **** **** 0805',
        img: 'img/creditCards/mastercard.png'
      }
    ]
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const images = canvas.getAllByRole('img')
    const radios = canvas.getAllByRole('radio')

    expect(images.length).toBeGreaterThan(0)
    expect(radios.length).toBeGreaterThan(0)
    expect(canvas.getByText(/7937/)).toBeInTheDocument()
    expect(canvas.getByText(/0805/)).toBeInTheDocument()
  }
}

export const WithCreditCardSelected: Story = {
  args: {
    ...WithCreditCards.args,
    handlePayment: jest.fn()
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const radios = canvas.getAllByRole('radio')
    const buttonBuyNow = canvas.getByRole('button', { name: /buy now/i })

    // Testind disabled button and enable button "Buy now" only if a credit card is checked
    await userEvent.click(buttonBuyNow)
    expect(args.handlePayment).not.toHaveBeenCalled()

    for (let i = 0; i < radios.length; i++) {
      expect(radios[i]).not.toBeChecked()
      await userEvent.click(radios[i])
      expect(radios[i]).toBeChecked()
    }

    expect(buttonBuyNow).not.toBeDisabled()
    await userEvent.click(buttonBuyNow)
    await waitFor(() => expect(args.handlePayment).toHaveBeenCalled())
  }
}
