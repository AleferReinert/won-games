import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import BaseComponent from './Base'
import React from 'react'

const meta: Meta<typeof BaseComponent> = {
  title: 'Templates/Base',
  component: BaseComponent,
  args: {
    children: (
      <div style={{ color: 'white', textAlign: 'center' }}>
        Required children
      </div>
    )
  },
  parameters: {
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof BaseComponent>

export const Base: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const header = canvasElement.getElementsByTagName('header')[0]
    const children = canvas.getByText(/required children/i)
    const footer = canvasElement.getElementsByTagName('footer')[0]

    expect(header).toBeInTheDocument()
    expect(children).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  }
}
