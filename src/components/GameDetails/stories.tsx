import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameDetails from '.'
import theme from 'styles/theme'
import mock from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: mock,
  argTypes: {
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    categories: {
      control: {
        type: 'inline-check',
        options: ['Action', 'Adventure', 'Role-playing', 'Simulation']
      }
    }
  }
} as ComponentMeta<typeof GameDetails>

export const Default: ComponentStory<typeof GameDetails> = (args) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: theme.grid.container,
      padding: '2.5rem'
    }}
  >
    <GameDetails {...args} />
  </div>
)
