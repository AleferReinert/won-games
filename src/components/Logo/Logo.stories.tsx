import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { remToPx } from 'polished'
import theme from 'styles/theme'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const logo = canvas.getByLabelText(/won games/i)
    const wrapper = canvas.getByTestId('LogoComponent')

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
    const wrapper = canvas.getByTestId('LogoComponent')

    expect(wrapper).toHaveStyle({ width: remToPx('5.8rem') })
  }
}

export const Large: Story = {
  args: {
    size: 'large'
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('LogoComponent')

    expect(wrapper).toHaveStyle({
      width: remToPx('20rem')
    })
  }
}

export const WithoutText: Story = {
  args: {
    $hideText: true
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByTestId('LogoComponent')
    const text = canvas.getByLabelText('won')

    expect(wrapper).toBeVisible()
    expect(text).not.toBeVisible()
  }
}
