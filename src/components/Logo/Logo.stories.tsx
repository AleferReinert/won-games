import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { remToPx } from 'polished'
import Logo from './Logo'
import theme from 'styles/theme'

const meta: Meta<typeof Logo> = {
  title: 'Components/Atoms/Logo',
  component: Logo
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const logo = canvas.getByLabelText(/won games/i)
    const wrapper = canvas.getByTestId('logoComponent')

    expect(logo).toHaveStyle({ color: theme.colors.white })
    expect(wrapper).toHaveStyle({ width: remToPx('11rem') })
  }
}

export const Black: Story = {
  args: {
    color: 'black'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const logo = canvas.getByLabelText(/won games/i)

    expect(logo).toHaveStyle({ color: theme.colors.black })
  }
}

export const Small: Story = {
  args: {
    size: 'small'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('logoComponent')

    expect(wrapper).toHaveStyle({ width: remToPx('5.8rem') })
  }
}

export const Large: Story = {
  args: {
    size: 'large'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('logoComponent')

    expect(wrapper).toHaveStyle({
      width: remToPx('20rem')
    })
  }
}

export const WithoutText: Story = {
  args: {
    withoutText: true
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('logoComponent')
    const text = canvas.getByLabelText('won')

    expect(wrapper).toBeVisible()
    expect(text).not.toBeVisible()
  }
}
