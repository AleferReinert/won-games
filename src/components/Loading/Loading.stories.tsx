import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import LoadingComponent from './Loading'

const meta: Meta<typeof LoadingComponent> = {
  title: 'Components/Loading',
  component: LoadingComponent
}

export default meta

type Story = StoryObj<typeof LoadingComponent>

export const Loading: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loading = canvas.getByRole('img', { name: 'Carregando' })
    expect(loading).toBeVisible()
  }
}
