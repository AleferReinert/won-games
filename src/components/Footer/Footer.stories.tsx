import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import FooterComponent from './Footer'

const meta: Meta<typeof FooterComponent> = {
  title: 'Components/Footer',
  component: FooterComponent,
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
}

export default meta

type Story = StoryObj<typeof FooterComponent>

export const Footer: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const logo = canvas.getByRole('img', { name: /won games/i })
    const titles = ['Contact', 'Follow Us', 'Links', 'Location']
    const email = canvas.getByRole('link', { name: /email/i })
    const phone = canvas.getByRole('link', { name: /phone/i })
    const address = canvasElement.getElementsByTagName('address')[0]
    const copyright = canvas.getByLabelText(/copyright/i)

    expect(logo).toBeInTheDocument()
    for (const title of titles) {
      expect(canvas.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(email).toBeInTheDocument()
    expect(phone).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(copyright).toBeInTheDocument()
  }
}
