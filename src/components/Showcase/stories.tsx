import { ComponentStory, ComponentMeta } from '@storybook/react'
import Showcase from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Showcase>

export const Default: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

Default.args = {
  title: 'Most Populars',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutGames: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Populars',
  highlight: highlightMock
}

export const WithoutHighlight: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Populars',
  games: gamesMock
}
