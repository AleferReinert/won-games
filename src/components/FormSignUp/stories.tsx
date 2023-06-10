import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Forms/FormSignUp',
  component: FormSignUp,
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
} as ComponentMeta<typeof FormSignUp>

export const Default: ComponentStory<typeof FormSignUp> = () => (
  <div style={{ width: '38rem', margin: '0 auto' }}>
    <FormSignUp />
  </div>
)
