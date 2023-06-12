import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard from '.'
import mockGameCard from './mock'

export default {
  title: 'GameCard',
  component: GameCard,
  args: mockGameCard,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof GameCard>

export const Default: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'small',
  ribbonColor: 'primary',
  promotionalPrice: '$185.00'
}
