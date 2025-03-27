import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('CreditCard components', () => {
      const creditCardComponents = canvas.getAllByTestId('CreditCardComponent')
      expect(creditCardComponents.length).toBeGreaterThan(0)
    })
  }
}
