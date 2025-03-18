import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import ContainerComponent from './Container'

const meta: Meta<typeof ContainerComponent> = {
  title: 'Components/Atoms/Container',
  component: ContainerComponent,
  tags: ['autodocs'],
  args: {
    children: (
      <div
        style={{
          background: theme.colors.lightBg,
          width: '100%',
          padding: '80px 0',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'
        }}
      >
        children
      </div>
    )
  }
}

export default meta

type Story = StoryObj<typeof ContainerComponent>

export const Container: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByText(/children/i)
    const container = children.parentElement

    await step('Children', () => {
      expect(children).toBeInTheDocument()
    })

    step('Max width', () => {
      expect(container).toHaveStyle({ maxWidth: remToPx(theme.grid.container) })
    })
  }
}
