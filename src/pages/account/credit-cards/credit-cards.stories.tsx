import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { creditCardsMock } from 'mocks/creditCards.mock'
import AccountTemplate from 'templates/Account/Account'
import CreditCardsPage from '.'

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
    const visa = canvas.getByRole('img', { name: /visa/i })
    const mastercard = canvas.getByRole('img', { name: /mastercard/i })

    expect(visa).toBeInTheDocument()
    expect(mastercard).toBeInTheDocument()
  }
}
