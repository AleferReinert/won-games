import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ContainerComponent from './Container'
import theme from 'styles/theme'
import { remToPx } from 'polished'

const meta: Meta<typeof ContainerComponent> = {
  title: 'Components/Container',
  component: ContainerComponent
}

export default meta

type Story = StoryObj<typeof ContainerComponent>

export const Container: Story = {
  render: () => (
    <ContainerComponent>
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
        container
      </div>
    </ContainerComponent>
  ),
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const container = canvas.getByText(/container/i).parentElement

    expect(container).toHaveStyle({
      maxWidth: remToPx(theme.grid.container)
    })
  }
}
