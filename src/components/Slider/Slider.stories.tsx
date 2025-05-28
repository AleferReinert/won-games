import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
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
      <Slider settings={args.settings}>
        <div data-testid='slide' className='bg-theme-secondary h-48 text-white text-center leading-48 text-3xl border'>
          1
        </div>
        <div data-testid='slide' className='bg-theme-secondary h-48 text-white text-center leading-48 text-3xl border'>
          2
        </div>
        <div data-testid='slide' className='bg-theme-secondary h-48 text-white text-center leading-48 text-3xl border'>
          3
        </div>
        <div data-testid='slide' className='bg-theme-secondary h-48 text-white text-center leading-48 text-3xl border'>
          4
        </div>
        <div data-testid='slide' className='bg-theme-secondary h-48 text-white text-center leading-48 text-3xl border'>
          5
        </div>
      </Slider>
    )
  }
}
export default meta

type Story = StoryObj<typeof Slider> & { args: { settings: string } }

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
