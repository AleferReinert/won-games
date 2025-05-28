import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import AuthLayout from './layout'

const meta: Meta<typeof AuthLayout> = {
  title: 'Layouts/Auth',
  component: AuthLayout,
  args: {
    children: <div className='text-center'>Required children</div>
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof AuthLayout>

export const Auth: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('2 LogoComponents', () => {
      waitFor(() => {
        const logoComponent = canvas.getAllByTestId('LogoComponent')
        expect(logoComponent.length).toBe(2)
      })
    })

    await step('Column left background image', () => {
      waitFor(() => {
        const backgroundImage = canvas.getByTestId('AuthBackgroundImage')
        expect(backgroundImage.getAttribute('src')).toContain('img/authentication-bg.jpg')
      })
    })

    await step('Column left title', () => {
      waitFor(() => {
        const title = canvas.getByRole('heading', { level: 2 })
        expect(title).toHaveTextContent('All your favorites games in one place')
      })
    })

    await step('Column left description', () => {
      waitFor(() => {
        const description = canvas.getByText(/is the best and most complete gaming platform\./i)
        expect(description).toBeVisible()
      })
    })

    await step('Column left copyright', () => {
      waitFor(() => {
        const copyright = canvas.getByText(/Won Games 2023 © Todos os Direitos Reservados/i)
        expect(copyright).toBeVisible()
      })
    })

    await step('Required children', () => {
      waitFor(() => {
        const children = canvas.getByText(/required children/i)
        expect(children).toBeInTheDocument()
      })
    })
  }
}
