import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { FooterColumn } from './FooterColumn'

const meta: Meta<typeof FooterColumn> = {
  title: 'Components/FooterColumn',
  component: FooterColumn,
  args: {
    title: 'Lorem ipsum',
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    children: <a href='/'>Link</a>
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    },
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof FooterColumn>

export const Default: Story = {
  name: 'FooterColumn',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Heading', () => {
      const logo = canvas.getByRole('heading', { name: 'Lorem ipsum' })
      expect(logo).toBeVisible()
    })

    await step('Children', () => {
      const logo = canvas.getByRole('link', { name: 'Link' })
      expect(logo).toBeVisible()
    })
  }
}
