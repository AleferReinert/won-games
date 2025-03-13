import { MockedProvider } from '@apollo/client/testing'
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { waitFor, within } from '@storybook/testing-library'
import { filterOptionsMock } from 'components/Filter/mock'
import { GET_ALL_GAMES } from 'graphql/queries/getAllGames'
import DefaultTemplate from 'templates/Default/Default'
import { apolloCache } from 'utils/apolloCache'
import GamesPage, { productsLimit } from '.'
import { mockGames, mockMoreGames } from './mock'

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
  render: () => (
    <MockedProvider mocks={[mockGames, mockMoreGames]} cache={apolloCache}>
      <GamesPage filterOptions={filterOptionsMock} />
    </MockedProvider>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getAllByTestId('filterComponent'))

    await waitFor(async () => {
      const product1 = canvas.getByRole('heading', {
        level: 3,
        name: 'The Legend of Zelda: Breath of the Wild'
      })
      const buttonShowMore = canvas.getByRole('button', { name: /show more/i })

      expect(product1).toBeInTheDocument()
      expect(buttonShowMore).toBeInTheDocument()

      buttonShowMore.click()
      await waitFor(() => {
        const product2 = canvas.getByText('Cyberpunk 2077')
        expect(product2).toBeInTheDocument()
      })
    })
  }
}

export const Empty: Story = {
  render: () => (
    <MockedProvider
      addTypename={false}
      mocks={[
        {
          request: {
            query: GET_ALL_GAMES,
            variables: {
              limit: productsLimit,
              filters: { price: {}, and: [] }
            }
          },
          result: {
            data: {
              games: {
                data: []
              }
            }
          }
        }
      ]}
    >
      <GamesPage filterOptions={filterOptionsMock} />
    </MockedProvider>
  ),
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
