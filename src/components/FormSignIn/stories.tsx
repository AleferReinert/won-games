import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Forms/FormSignIn',
  component: FormSignIn,
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
} as ComponentMeta<typeof FormSignIn>

export const Default: ComponentStory<typeof FormSignIn> = (args) => (
  <div style={{ width: '38rem', margin: '0 auto' }}>
    <FormSignIn {...args} />
  </div>
)
