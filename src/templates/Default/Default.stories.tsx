import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import DefaultTemplate from './Default'
import React from 'react'

const meta: Meta<typeof DefaultTemplate> = {
  title: 'Templates/Default',
  component: DefaultTemplate,
  args: {
    children: (
      <div style={{ color: 'white', textAlign: 'center' }}>
        Required children
      </div>
    )
  },
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  }
}

export default meta

type Story = StoryObj<typeof DefaultTemplate>

export const Default: Story = {
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
