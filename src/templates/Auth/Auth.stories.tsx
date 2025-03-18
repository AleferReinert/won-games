import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import AuthTemplate from './Auth'

const meta: Meta<typeof AuthTemplate> = {
  title: 'Templates/Auth',
  component: AuthTemplate,
  args: {
    title: 'Required title',
    children: 'Required children'
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof AuthTemplate>

export const Auth: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const logos = canvas.getAllByRole('img', { name: /won games/i })
    const hugeTitle = canvas.getByRole('heading', {
      name: /all your favorites games in one place/i
    })
    const description = canvas.getByText(
      /is the best and most complete gaming platform\./i
    )
    const copyright = canvas.getByText(
      /Won Games 2023 © Todos os Direitos Reservados/i
    )
    const backgroundImage = window.getComputedStyle(
      hugeTitle.parentElement!.parentElement!.parentElement!
    ).backgroundImage
    const title = canvas.getByRole('heading', { name: /required title/i })
    const children = canvas.getByText(/required children/i)

    // Two logos
    expect(logos.length).toBe(2)

    // Fixed elements
    expect(hugeTitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(copyright).toBeInTheDocument()
    expect(backgroundImage).toContain('img/auth-bg.jpg')

    // Required elements
    expect(title).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  }
}
