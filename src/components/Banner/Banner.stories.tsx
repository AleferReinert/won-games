import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
import { bannersMock } from '../../mocks/banners.mock'
import Banner from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ],
  tags: ['autodocs']
}

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    ...bannersMock[0]
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Required image', () => {
      const image = canvas.getByRole('img', { name: 'Defy death' })
      expect(image).toHaveAttribute('src', '/img/background-test.png')
    })

    await step('Required title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('Defy death')
    })

    await step('Required description html', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toContainHTML(
        'Play the new <strong>CrashLands</strong> season'
      )
    })

    await step('Required button link with label and link', () => {
      const button = canvas.getByRole('link', { name: /buy now/i })
      expect(button).toHaveAttribute('href', '/products/defy-death')
    })
  }
}

export const WithRibbon: Story = {
  args: {
    ...bannersMock[1]
  },
  parameters: {
    options: {
      showPanel: true
    }
  },
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const ribbon = canvas.getByText(/new/i)

    step('Ribbon', () => {
      expect(ribbon).toBeInTheDocument()
    })
  }
}

export default meta
