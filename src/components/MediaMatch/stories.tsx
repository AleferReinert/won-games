import { ComponentStory, ComponentMeta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'Utils/MediaMatch',
  component: MediaMatch,
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
} as ComponentMeta<typeof MediaMatch>

export const Desktop: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch greaterThan='small'>Apenas desktop</MediaMatch>
)

export const Mobile: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch lessThan='small'>Apenas mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
