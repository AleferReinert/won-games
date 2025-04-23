import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import Container from 'components/Container/Container'
import { bannersMock } from '../../mocks/banners.mock'
import Banner from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    img: bannersMock[0].img
  },
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Required image', () => {
      const image = canvas.getByRole('img')
      expect(image).toBeVisible()
    })
  }
}

export const Title: Story = {
  args: {
    title: bannersMock[0].title
  },
  parameters: {
    options: {
      showPanel: true
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Required title', () => {
      const title = canvas.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('Defy death')
    })
  }
}

export const Description: Story = {
  args: {
    description: bannersMock[0].description
  },
  parameters: {
    options: {
      showPanel: true
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Required description html', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toContainHTML('Play the new <strong>CrashLands</strong> season')
    })
  }
}

export const ButtonUrl: Story = {
  args: {
    buttonUrl: bannersMock[0].buttonUrl
  },
  parameters: {
    options: {
      showPanel: true
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Required button link with label and url', () => {
      const button = canvas.getByRole('link', { name: /buy now/i })
      expect(button).toHaveAttribute('href', '/products/defy-death')
    })
  }
}

export const WithRibbon: Story = {
  args: {
    ribbon: { label: bannersMock[1].ribbon!.label }
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
