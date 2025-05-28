import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import { StripePaymentForm } from './StripePaymentForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const meta: Meta<typeof StripePaymentForm> = {
  title: 'Components/StripePaymentForm',
  component: StripePaymentForm,
  decorators: (Story) => (
    <Elements stripe={stripePromise}>
      <Story />
    </Elements>
  ),
  parameters: {
    layout: 'padded',
    nextjs: {
      appDirectory: true
    }
  }
}

export default meta

type Story = StoryObj<typeof StripePaymentForm> & { args?: NextAuthSessionArgs }

export const Default: Story = {
  name: 'StripePaymentForm',
  args: {
    nextAuthSession: nextAuthSessionMock
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    // await step('HeadingComponent', () => {
    //   const headingComponent = canvas.getByTestId('HeadingComponent')
    //   expect(headingComponent).toHaveTextContent('Payment')
    // })

    // await step('Stripe: CardElement', () => {
    //   waitFor(() => {
    //     const cardElement = canvas.getByRole('presentation')
    //     expect(cardElement.getAttribute('src')).toContain('stripe.com')
    //   })
    // })

    await step('Button link to continue shopping', () => {
      const buttonLink = canvas.getByRole('link', { name: /continue shopping/i })
      expect(buttonLink).toHaveAttribute('href', '/explore')
    })

    await step('Button buy now disabled and with icon', () => {
      const buttonBuyNow = canvas.getByRole('button', { name: /buy now/i })
      const icon = within(buttonBuyNow).getByRole('img', { hidden: true })
      expect(buttonBuyNow).toBeDisabled()
      expect(icon).toBeVisible()
    })
  }
}
