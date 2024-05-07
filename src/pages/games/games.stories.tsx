import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import GamesPage from '.'
import DefaultTemplate from 'templates/Default/Default'
import productsMock from 'components/ProductSlider/mock'

const meta: Meta<typeof GamesPage> = {
  title: 'Pages/Games',
  component: GamesPage,
  decorators: [
    (Story) => (
      <DefaultTemplate>
        <Story />
      </DefaultTemplate>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof GamesPage>

export const WithGames: Story = {
  args: {
    products: productsMock
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getAllByTestId('filterComponent'))
    expect(canvas.getAllByTestId('productComponent'))
    expect(canvas.getByRole('button', { name: /show more/i }))
  }
}

export const Empty: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)

    expect(canvas.getByTestId('filterComponent'))
    expect(canvas.getAllByTestId('emptyComponent')).toHaveLength(2)
    expect(canvas.queryAllByTestId('productComponent')).toStrictEqual([])
    expect(
      canvas.queryByRole('button', { name: /show more/i })
    ).not.toBeInTheDocument()
  }
}
