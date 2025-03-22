import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import SliderComponent from './Slider'
import { Slide } from './Slider.styles'

const meta: Meta<typeof SliderComponent> = {
  title: 'Components/Slider',
  component: SliderComponent,
  argTypes: {
    settings: {
      options: ['Horizontal', 'Vertical'],
      control: { type: 'radio', defaultValue: 'Horizontal' },
      mapping: {
        Horizontal: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2
        },
        Vertical: {
          vertical: true,
          verticalSwiping: true,
          dots: true,
          infinite: false,
          slidesToShow: 1
        }
      }
    }
  },
  tags: ['autodocs'],
  render: (args) => {
    return (
      <SliderComponent settings={args.settings}>
        <Slide data-testid='slide'>1</Slide>
        <Slide data-testid='slide'>2</Slide>
        <Slide data-testid='slide'>3</Slide>
        <Slide data-testid='slide'>4</Slide>
        <Slide data-testid='slide'>5</Slide>
      </SliderComponent>
    )
  }
}
export default meta

type Story = StoryObj<typeof SliderComponent> & { args: { settings: string } }

export const Horizontal: Story = {
  args: {
    settings: 'Horizontal'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Multiple slides', () => {
      const slides = canvas.getAllByTestId('slide')
      expect(slides.length).toBeGreaterThan(2)
    })

    await step('Horizontal slider', () => {
      const slider = canvasElement.querySelector('.slick-slider')
      expect(slider).not.toHaveClass('slick-vertical')
    })
  }
}

export const Vertical: Story = {
  args: {
    settings: 'Vertical'
  },
  play: async ({ canvasElement, step }) => {
    await step('Vertical slider', () => {
      const slider = canvasElement.querySelector('.slick-slider')
      expect(slider).toHaveClass('slick-vertical')
    })
  }
}
