import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { FilterContext } from 'contexts/FilterContext'
import { filterContextMock } from 'mocks/filterContext.mock'
import { productsResponseMock } from 'mocks/productsResponse.mock'
import { apolloCache } from 'utils/apolloCache'
import { FilterTags } from './FilterTags'

const meta: Meta<typeof FilterTags> = {
  title: 'Components/FilterTags',
  component: FilterTags,
  parameters: {
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof FilterTags>

export const Default: Story = {
  name: 'FilterTags',
  decorators: [
    (Story) => (
      <FilterContext.Provider value={filterContextMock}>
        <MockedProvider mocks={[productsResponseMock]} cache={apolloCache}>
          <Story />
        </MockedProvider>
      </FilterContext.Provider>
    )
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const list = canvas.getByRole('list', { name: 'Applied filters' })
    const buttons = canvas.getAllByRole('button', { name: 'Remove' })

    await step('List', () => {
      expect(list).toBeVisible()
    })

    await step('Buttons to remove', () => {
      expect(buttons.length).toBe(6)
    })

    await step('Search term', () => {
      expect(canvas.getByText('Results for')).toBeVisible()
      expect(canvas.getByText('gta')).toBeVisible()
    })

    await step('Price', () => {
      expect(canvas.getByText('Under')).toBeVisible()
      expect(canvas.getByText('$50')).toBeVisible()
    })

    await step('Categories', () => {
      expect(canvas.getByText('Action')).toBeVisible()
      expect(canvas.getByText('Adventure')).toBeVisible()
    })

    await step('Platforms', () => {
      expect(canvas.getByText('Linux')).toBeVisible()
      expect(canvas.getByText('Mac')).toBeVisible()
    })
  }
}
