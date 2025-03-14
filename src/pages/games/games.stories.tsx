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
    const product1 = await waitFor(() =>
      canvas.getByRole('heading', {
        level: 3,
        name: 'The Legend of Zelda: Breath of the Wild'
      })
    )

    const buttonShowMore = await waitFor(() =>
      canvas.queryByRole('button', {
        name: /show more/i
      })
    )

    await waitFor(async () => {
      // primeiros produtos carregados
      await expect(product1).toBeInTheDocument()

      // botão de show more visivel
      await expect(buttonShowMore).toBeVisible()

      // carrega mais produtos ao clicar
      await buttonShowMore?.click()
      await waitFor(async () => {
        const product4 = await waitFor(() =>
          canvas.getByRole('heading', {
            level: 3,
            name: 'Cyberpunk 2077'
          })
        )
        expect(product4).toBeInTheDocument()
      })

      // botão de show more nao visivel após todos os produtos serem carregados
      await expect(buttonShowMore).not.toBeInTheDocument()
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
