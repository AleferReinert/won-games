import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import MenuMobileComponent from './MenuMobile'

const meta: Meta<typeof MenuMobileComponent> = {
  title: 'Components/MenuMobile',
  component: MenuMobileComponent,
  parameters: {
    viewport: {
      defaultViewport: 'xsmall'
    }
  }
}

export default meta

type Story = StoryObj<typeof MenuMobileComponent>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const closeIcon = canvas.getByLabelText(/close menu/i)
    const menuLinks = ['Home', 'Explore', 'Log in now', 'Sign up']
    const or = canvas.getByText('or')

    // render all elements
    expect(closeIcon).toBeInTheDocument()
    expect(or).toBeInTheDocument()
    for (const link of menuLinks) {
      expect(canvas.getByText(link)).toBeInTheDocument()
    }
  }
}

export const Authenticated: Story = {
  args: {
    username: 'John'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const closeIcon = canvas.getByLabelText(/close menu/i)
    const menuLinks = ['Home', 'Explore', 'My account', 'Wishlist']
    const AuthLinks = ['Log in now', 'Sign up']

    expect(closeIcon).toBeInTheDocument()

    for (const link of menuLinks) {
      expect(canvas.getByText(link)).toBeInTheDocument()
    }

    for (const link of AuthLinks) {
      expect(canvas.queryByText(link)).not.toBeInTheDocument()
    }
  }
}
