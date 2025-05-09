import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, waitFor, within } from '@storybook/test'
import { nextAuthSessionMock } from 'mocks/nextAuthSession.mock'
import { customViewports } from '../../../.storybook/customViewports'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import MenuMobileComponent from './MenuMobile'

const meta: Meta<typeof MenuMobileComponent> = {
  title: 'Components/MenuMobile',
  component: MenuMobileComponent,
  args: {
    menuMobile: true,
    setMenuMobile: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'xxsmall'
    }
  },
  decorators: (Story) => (
    <div style={{ height: `${customViewports.xxsmall.styles.height}` }}>
      <Story />
    </div>
  ),
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof MenuMobileComponent> & { args?: NextAuthSessionArgs }

export const Authenticated: Story = {
  args: {
    nextAuthSession: nextAuthSessionMock
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('My account link', () => {
      const myAccountLink = canvas.getByRole('link', { name: 'My account' })
      expect(myAccountLink).toHaveAttribute('href', '/account/profile')
    })

    await step('Wishlist link', () => {
      const wishlistLink = canvas.getByRole('link', { name: 'Wishlist' })
      expect(wishlistLink).toHaveAttribute('href', '/wishlist')
    })

    await step('Logout link', () => {
      const logoutLink = canvas.getByRole('link', { name: 'Logout' })
      expect(logoutLink).toBeVisible()
    })

    await step('Log in link hidden', () => {
      const logInNow = canvas.queryByRole('link', { name: 'Log in' })
      expect(logInNow).not.toBeInTheDocument()
    })

    await step('Sign up link hidden', () => {
      const signUp = canvas.queryByRole('link', { name: 'Sign up' })
      expect(signUp).not.toBeInTheDocument()
    })
  }
}

export const Unauthenticated: Story = {
  args: {
    nextAuthSession: null
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Close button with icon', async () => {
      const button = await waitFor(() => canvas.getByRole('button', { name: /close menu/i }))
      const icon = within(button).getByRole('img', { hidden: true })
      expect(button).toBeVisible()
      expect(icon).toBeVisible()
    })

    await step('Menu links', () => {
      const home = canvas.getByRole('link', { name: 'Home' })
      const explore = canvas.getByRole('link', { name: 'Explore' })
      expect(home).toHaveAttribute('href', '/')
      expect(explore).toHaveAttribute('href', '/products')
    })

    await step('Log in button link', () => {
      const logInNow = canvas.getByRole('link', { name: 'Log in' })
      expect(logInNow).toHaveAttribute('href', '/sign-in')
    })

    await step('Sign up link', () => {
      const signUp = canvas.getByRole('link', { name: 'Sign up' })
      expect(signUp).toHaveAttribute('href', '/sign-up')
    })
  }
}
