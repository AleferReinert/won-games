import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameInfo from '.'
import mockGameInfo from './mock'
import theme from 'styles/theme'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    layout: 'fullscreen'
  },
  args: mockGameInfo
} as ComponentMeta<typeof GameInfo>

export const Default: ComponentStory<typeof GameInfo> = (args) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: theme.grid.container,
      padding: '2.5rem'
    }}
  >
    <GameInfo {...args} />
  </div>
)
