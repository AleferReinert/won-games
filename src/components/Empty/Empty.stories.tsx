import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import Empty from './Empty'

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  args: {
    title: 'No results found',
    description: `Sorry, we couldn't find any results for your search.`
  },
  argTypes: {
    link: { if: { arg: 'label' } }
  }
}

export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const img = canvas.getByRole('img')
    const title = canvas.getByRole('heading', { name: /no results found/i })
    const description = canvas.getByText(
      /sorry, we couldn't find any results for your search./i
    )

    expect(img).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  }
}

export const WithButton: Story = {
  args: {
    label: 'Go back to store',
    link: '/link'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('link', { name: /go back to store/i })

    expect(button).toHaveAttribute('href', '/link')
  }
}
