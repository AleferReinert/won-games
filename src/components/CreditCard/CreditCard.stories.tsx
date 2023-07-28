import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import CreditCardComponent from './CreditCard'
import creditCardMock from 'components/PaymentOptions/mock'
import theme from 'styles/theme'
import { hexToRGBA } from 'utils/tests/helpers'

const meta: Meta<typeof CreditCardComponent> = {
  title: 'Components/Atoms/CreditCard',
  component: CreditCardComponent,
  args: creditCardMock[0],
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
}

export default meta

type Story = StoryObj<typeof CreditCardComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const flagImg = canvas.getByRole('img')
    const number = canvas.getByText(/\*\*\*\* \*\*\*\* \*\*\*\*/)
    const wrapper = flagImg.parentElement

    expect(flagImg).toHaveAccessibleName(/visa/i)
    expect(number).toBeInTheDocument()

    // Direction left and color black as default
    expect(wrapper).toHaveStyle({
      flexDirection: 'row',
      color: hexToRGBA(theme.colors.black)
    })
  }
}

export const Gray: Story = {
  args: {
    color: 'gray'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const flagImg = canvas.getByRole('img')
    const wrapper = flagImg.parentElement

    expect(wrapper).toHaveStyle({
      color: hexToRGBA(theme.colors.gray)
    })
  }
}

export const Right: Story = {
  args: {
    direction: 'right'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const flagImg = canvas.getByRole('img')
    const wrapper = flagImg.parentElement

    expect(wrapper).toHaveStyle({
      flexDirection: 'row-reverse'
    })
  }
}
