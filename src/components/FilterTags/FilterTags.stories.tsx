import { MockedProvider } from '@apollo/client/testing'
import type { Meta, StoryObj } from '@storybook/react'
import { FilterContext } from 'contexts/FilterContext'
import { filterContextMock } from 'mocks/filterContext.mock'
import { productsResponseMock } from 'mocks/productsResponse.mock'
import { apolloCache } from 'utils/apolloCache'
import FilterTagsComponent from './FilterTags'

const meta: Meta<typeof FilterTagsComponent> = {
  title: 'Components/FilterTags',
  component: FilterTagsComponent,
  parameters: {
    layout: 'padded'
  }
}

export default meta

type Story = StoryObj<typeof FilterTagsComponent>

export const FilterTags: Story = {
  decorators: [
    (Story) => (
      <FilterContext.Provider value={filterContextMock}>
        <MockedProvider mocks={[productsResponseMock]} cache={apolloCache}>
          <Story />
        </MockedProvider>
      </FilterContext.Provider>
    )
  ]
  // play: async ({canvasElement, step}) => {
  //     const canvas = within(canvasElement)

  // 		await step('',() =>{
  //       expect()
  // 		})
  // }
}
