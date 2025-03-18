import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import LoadingComponent from './Loading'

const meta: Meta<typeof LoadingComponent> = {
  title: 'Components/Loading',
  component: LoadingComponent,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof LoadingComponent>

export const Loading: Story = {
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('3 dots animation', () => {
      const loading = canvas.getByRole('img', { name: 'Carregando' })
      expect(loading).toBeVisible()
    })
  }
}
