import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
import FooterComponent from './Footer'

const meta: Meta<typeof FooterComponent> = {
  title: 'Components/Footer',
  component: FooterComponent,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FooterComponent>

export const Footer: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Logo', () => {
      const logo = canvas.getByRole('img', { name: /won games/i })
      expect(logo).toBeVisible()
    })

    await step('Titles', () => {
      const titles = ['Contact', 'Follow Us', 'Links', 'Location']
      for (const title of titles) {
        expect(
          canvas.getByRole('heading', { level: 2, name: title })
        ).toBeVisible()
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
