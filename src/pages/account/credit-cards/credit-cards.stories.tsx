import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import AccountTemplate from 'templates/Account/Account'
import CreditCardsPage from './index'
import creditCardsMock from 'components/PaymentOptions/mock'

const meta: Meta<typeof CreditCardsPage> = {
  title: 'Pages/Account/CreditCards',
  component: CreditCardsPage,
  args: {
    creditCards: creditCardsMock
  },
  decorators: [
    (Story) => (
      <AccountTemplate activeLink='My cards'>
        <Story />
      </AccountTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof CreditCardsPage>

export const CreditCards: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const visa = canvas.getByTitle(/visa/i)
    const mastercard = canvas.getByTitle(/mastercard/i)

    expect(visa).toBeInTheDocument()
    expect(mastercard).toBeInTheDocument()
  }
}
