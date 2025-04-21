import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import StripePaymentFormComponent from './StripePaymentForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const meta: Meta<typeof StripePaymentFormComponent> = {
  title: 'Components/StripePaymentForm',
  component: StripePaymentFormComponent,
  decorators: (Story) => (
    <Elements stripe={stripePromise}>
      <Story />
    </Elements>
  ),
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  }
}

export default meta

type Story = StoryObj<typeof StripePaymentFormComponent> & { args?: NextAuthSessionArgs }

export const StripePaymentForm: Story = {
  args: {
    nextAuthSession: nextAuthSessionMock
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('HeadingComponent', () => {
      const headingComponent = canvas.getByTestId('HeadingComponent')
      expect(headingComponent).toHaveTextContent('Payment')
    })

    await step('Stripe: CardElement', () => {
      waitFor(() => {
        const cardElement = canvas.getByRole('presentation')
        expect(cardElement.getAttribute('src')).toContain('stripe.com')
      })
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
