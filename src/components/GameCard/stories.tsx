import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Other Ocean',
    img: '/img/population-zero.jpg',
    price: 'R$ 215,00',
    promotionalPrice: 'R$ 185,00'
  },
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
  ribbonColor: 'primary'
}
