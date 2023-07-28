import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { remToPx } from 'polished'
import ContainerComponent from './Container'
import theme from 'styles/theme'

const children = (
  <div
    style={{
      background: theme.colors.lightBg,
      width: '100%',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    }}
  >
    children
  </div>
)

const meta: Meta<typeof ContainerComponent> = {
  title: 'Components/Atoms/Container',
  component: ContainerComponent,
  args: {
    children: children
  }
}

export default meta

type Story = StoryObj<typeof ContainerComponent>

export const Container: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByText(/children/i)
    const container = children.parentElement

    expect(children).toBeInTheDocument()
    expect(container).toHaveStyle({
      maxWidth: remToPx(theme.grid.container)
    })
  }
}
