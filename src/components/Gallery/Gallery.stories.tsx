import type { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import GalleryComponents from './Gallery'
import items from './mock'

const meta: Meta<typeof GalleryComponents> = {
  title: 'Components/Gallery',
  component: GalleryComponents,
  args: { items },
  argTypes: {
    items: {
      table: { disable: true }
    }
  }
}

export default meta

type Story = StoryObj<typeof GalleryComponents>

export const Default: Story = {}

export const Tests: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const thumb1 = canvas.getByRole('img', { name: 'Thumb ' + items[0].label })
    const thumb2 = canvas.getByRole('img', { name: 'Thumb ' + items[1].label })
    const modal = canvas.getByLabelText('modal')
    const buttonCloseModal = canvas.getByLabelText(/close modal/i)

    // should render thumbs
    expect(thumb1).toBeInTheDocument()
    expect(thumb2).toBeInTheDocument()

    // closed modal on load page
    expect(modal).toHaveAttribute('aria-hidden', 'true')

    // open modal on thumb clicked
    await userEvent.click(thumb1)
    expect(modal).toHaveAttribute('aria-hidden', 'false')

    // close modal on closeButton clicked
    await userEvent.click(buttonCloseModal)
    expect(modal).toHaveAttribute('aria-hidden', 'true')

    // close modal on press Esc
    await userEvent.click(thumb1)
    await userEvent.click(thumb1)
    await userEvent.keyboard('{Escape}')
    expect(modal).toHaveAttribute('aria-hidden', 'true')

    // Open image2 on thumb2 clicked
    await userEvent.click(thumb2)
    const originalImage2 = canvas.getByRole('img', {
      name: items[1].label
    }).parentElement?.parentElement
    await waitFor(() => expect(originalImage2).toHaveClass('slick-active'))
    await userEvent.click(buttonCloseModal)

    // Open image1 on thumb1 clicked
    await userEvent.click(thumb1)
    const originalImage1 = canvas.getByRole('img', { name: items[0].label })
      .parentElement?.parentElement
    await waitFor(() => expect(originalImage1).toHaveClass('slick-active'))
    await userEvent.click(buttonCloseModal)
  }
}
