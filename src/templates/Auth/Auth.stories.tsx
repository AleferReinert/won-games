import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import AuthComponent from './Auth'

const meta: Meta<typeof AuthComponent> = {
  title: 'Templates/Auth',
  component: AuthComponent,
  args: {
    title: 'Required title',
    children: 'Required children'
  }
}

export default meta

type Story = StoryObj<typeof AuthComponent>

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

    // two logos with different ids
    expect(logos.length).toBe(2)
    expect(logos[0].id).not.toBe(logos[1].id)

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
