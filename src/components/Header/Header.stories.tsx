import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { jsMediaQuery } from 'utils/tests/helpers'
import HeaderComponent from './Header'
import theme from 'styles/theme'

const meta: Meta<typeof HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent
}

export default meta

type Story = StoryObj<typeof HeaderComponent>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const openMenuIcon = canvas.getByLabelText(/open menu/i)
    const logo = canvas.getByRole('img', { name: /won games/i })
    const menuDesktop = ['Home', 'Explore']
    const searchIcon = canvas.getByLabelText(/search/i)
    const shoppingCartIcon = canvas.getByTitle(/shopping cart/i)
    const badgeCart = canvas.getByLabelText(/cart items/i)
    const signInButton = canvas.queryByRole('link', { name: /sign in/i })
    const menuMobile = canvas.getByLabelText(/menu mobile/i)
    const closeMenuIcon = canvas.getByLabelText(/close menu/i)

    expect(logo).toBeInTheDocument()
    expect(searchIcon).toBeInTheDocument()
    expect(shoppingCartIcon).toBeInTheDocument()
    expect(badgeCart).toBeInTheDocument()
    expect(badgeCart).toHaveTextContent('0')
    expect(menuMobile).not.toBeVisible()
    expect(menuMobile).toHaveStyle({ pointerEvents: 'none' })

    jsMediaQuery.lessThan(theme.breakpoint.small, async () => {
      expect(openMenuIcon).toBeVisible()
      expect(signInButton).not.toBeInTheDocument()
      for (const link of menuDesktop) {
        expect(
          canvas.getAllByRole('link', { name: link, hidden: true })[0]
        ).not.toBeVisible()
      }

      // open menuMobile on openMenuIcon clicked
      await userEvent.click(openMenuIcon)
      await waitFor(() => {
        expect(menuMobile).toHaveAttribute('aria-hidden', 'false')
        expect(menuMobile).toHaveStyle({ pointerEvents: 'all' })

        setTimeout(() => {
          expect(menuMobile).not.toHaveStyle({ opacity: '0' })
        }, 50)
      })

      // close menuMobile on closeIcon clicked
      await userEvent.click(closeMenuIcon)
      await waitFor(() => {
        expect(menuMobile).toHaveAttribute('aria-hidden', 'true')
        expect(menuMobile).toHaveStyle({ pointerEvents: 'none' })
      })
    })

    jsMediaQuery.greaterThan(theme.breakpoint.small, async () => {
      expect(openMenuIcon).not.toBeVisible()
      expect(signInButton).toBeInTheDocument()
      for (const link of menuDesktop) {
        expect(
          canvas.getAllByRole('link', { name: link, hidden: true })[0]
        ).toBeVisible()
      }
    })
  }
}

export const Authenticated: Story = {
  args: {
    username: 'John Steven'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const signInButton = canvas.queryByRole('link', { name: /sign in/i })

    expect(signInButton).not.toBeInTheDocument()
  }
}

export const WithCartItems: Story = {
  args: {
    cartItems: 12
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const badgeCart = canvas.getByLabelText(/cart items/i)

    expect(badgeCart).toHaveTextContent('12')
  }
}

export const WithNegativeCartItems: Story = {
  args: {
    cartItems: -2
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const badgeCart = canvas.getByLabelText(/cart items/i)

    expect(badgeCart).toHaveTextContent('0')
  }
}
