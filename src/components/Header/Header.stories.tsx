import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import Container from 'components/Container/Container'
import { NextAuthSessionArgs } from '../../../.storybook/preview'
import HeaderComponent from './Header'

const meta: Meta<typeof HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: (Story) => (
    <Container>
      <Story />
    </Container>
  ),
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof HeaderComponent> & { args?: NextAuthSessionArgs }

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xsmall'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const menuButton = canvas.getByRole('button', { name: 'Open menu' })
    const menuMobile = canvas.getByTestId('MenuMobileComponent')

    await step('Menu button with icon', () => {
      const menuIcon = within(menuButton).getByRole('img', { hidden: true })
      expect(menuButton).toBeVisible()
      expect(menuIcon).toBeVisible()
    })

    await step('Logo component', () => {
      const logo = canvas.getByTestId('LogoComponent')
      expect(logo).toBeVisible()
    })

    await step('Search button with icon', () => {
      const searchButton = canvas.getByRole('button', { name: 'Search' })
      const searchIcon = within(searchButton).getByRole('img', { hidden: true })
      expect(searchButton).toBeVisible()
      expect(searchIcon).toBeVisible()
    })

    await step('Cart link with icon', () => {
      const cartLink = canvas.getByRole('link', { name: 'Shopping cart' })
      const cartIcon = within(cartLink).getByRole('img', { hidden: true })
      expect(cartLink).toBeVisible()
      expect(cartIcon).toBeVisible()
    })

    await step('Menu hidden on load page', () => {
      expect(menuMobile).not.toBeVisible()
    })

    await step('Menu visible on click menu button', async () => {
      userEvent.click(menuButton)
      await waitFor(() => expect(menuMobile).toBeVisible())
    })

    await step('Menu hidden on click close menu button', async () => {
      const closeMenuButton = canvas.getByRole('button', { name: 'Close menu' })
      userEvent.click(closeMenuButton)
      await waitFor(() => expect(menuMobile).not.toBeVisible())
    })
  }
}

export const Desktop: Story = {
  args: {
    nextAuthSession: null
  },
  parameters: {
    viewport: {
      defaultViewport: 'small'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const cartButton = canvas.getByRole('button', { name: 'Shopping cart' })
    const cartItemListComponent = canvas.getByTestId('CartItemsComponent')

    await step('Hidden menu button', () => {
      const menuButton = canvas.queryByRole('button', { name: /open menu/i })
      expect(menuButton).not.toBeInTheDocument()
    })

    await step('Menu desktop', () => {
      const homeLink = canvas.getByRole('link', { name: 'Home' })
      const exploreLink = canvas.getByRole('link', { name: 'Explore' })
      expect(homeLink).toHaveAttribute('href', '/')
      expect(exploreLink).toHaveAttribute('href', '/products')
    })

    await step('Cart button with icon', () => {
      const cartIcon = within(cartButton).getByRole('img', { hidden: true })
      expect(cartButton).toBeVisible()
      expect(cartIcon).toBeVisible()
    })

    await step('Sign in button link', () => {
      const signInButtonLink = canvas.getByRole('link', { name: 'Sign in' })
      expect(signInButtonLink).toHaveAttribute('href', '/sign-in')
    })

    await step('CartItemsComponent hidden', () => {
      expect(cartItemListComponent).not.toBeVisible()
    })

    await step('Open dropdown on click cart button', async () => {
      userEvent.click(cartButton)
      await waitFor(() => expect(cartItemListComponent).toBeVisible())
    })

    await step('Close dropdown on click cart button', async () => {
      userEvent.click(cartButton)
      await waitFor(() => expect(cartItemListComponent).not.toBeVisible())
    })
  }
}

export const Authenticated: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'small'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Hidden sign in button link', () => {
      const signInButtonLink = canvas.queryByRole('link', { name: 'Sign in' })
      expect(signInButtonLink).not.toBeInTheDocument()
    })

    await step('UserDropdownComponent', () => {
      const userDropdownComponent = canvas.getByTestId('UserDropdownComponent')
      expect(userDropdownComponent).toBeVisible()
    })
  }
}
