import type { Meta, StoryObj } from '@storybook/react'
import { bannersMock } from 'mocks/banners.mock'
import { highlightMock } from 'mocks/highlight.mock'
import { productsMock } from 'mocks/products.mock'
import DefaultTemplate from 'templates/Default/Default'
import HomeTemplate from '.'

const meta: Meta<typeof HomeTemplate> = {
  title: 'Pages/Home',
  component: HomeTemplate,
  args: {
    banners: bannersMock,
    newReleasesShowcase: {
      title: 'New Games',
      products: productsMock
    },
    mostPopularsShowcase: {
      title: 'Most Populars',
      highlight: highlightMock,
      products: productsMock
    },
    comingSoonShowcase: {
      title: 'Coming Soon',
      products: productsMock,
      highlight: highlightMock
    },
    freeProductsShowcase: {
      title: 'Free Games',
      products: productsMock,
      highlight: highlightMock
    }
  },
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof HomeTemplate>

export const Home: Story = {}
