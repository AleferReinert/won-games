import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { companyMock } from 'mocks/company.mock'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  args: {
    company: companyMock
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  name: 'Footer',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Logo', () => {
      waitFor(() => {
        const logo = canvas.getByRole('img', { name: /won games/i })
        expect(logo).toBeVisible()
      })
    })

    await step('Titles', () => {
      const titles = ['Contact', 'Follow Us', 'Links', 'Address']
      for (const title of titles) {
        expect(canvas.getByRole('heading', { level: 2, name: title })).toBeVisible()
      }
    })

    await step('E-mail', () => {
      const email = canvas.getByRole('link', { name: /email/i })
      expect(email).toBeVisible()
    })

    await step('Phone', () => {
      const phone = canvas.getByRole('link', { name: /phone/i })
      expect(phone).toBeVisible()
    })

    await step('Address', () => {
      const address = canvasElement.getElementsByTagName('address')[0]
      expect(address).toBeInTheDocument()
    })

    await step('Copyright', () => {
      const copyright = canvas.getByLabelText(/copyright/i)
      expect(copyright).toBeInTheDocument()
    })
  }
}
