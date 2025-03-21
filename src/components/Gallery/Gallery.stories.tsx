import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { galleryMock } from 'mocks/gallery.mock'
import GalleryComponents from './Gallery'

const meta: Meta<typeof GalleryComponents> = {
  title: 'Components/Gallery',
  component: GalleryComponents,
  args: { items: galleryMock },
  argTypes: {
    items: {
      table: { disable: true }
    }
  }
}

export default meta

type Story = StoryObj<typeof GalleryComponents>

export const Default: Story = {
  name: 'Gallery',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const thumb1 = canvas.getByRole('img', { name: 'Thumb Gallery Image 1' })
    const thumb2 = canvas.getByRole('img', { name: 'Thumb Gallery Image 2' })
    const modal = canvas.getByLabelText('modal')
    const buttonCloseModal = canvas.getByLabelText(/close modal/i)

    await step('Thumbs', () => {
      expect(thumb1).toBeVisible()
      expect(thumb2).toBeVisible()
    })

    await step('Hidden modal on load page', () => {
      expect(modal).not.toBeVisible()
    })

    await step('Open modal on thumb1 click', async () => {
      await userEvent.click(thumb1)
      await waitFor(() => expect(modal).toBeVisible())
    })

    await step('Close modal on closeButton click', async () => {
      await userEvent.click(buttonCloseModal)
      await waitFor(() => expect(modal).not.toBeVisible())
    })

    await step('Hidden modal on esc keydown', async () => {
      await userEvent.click(thumb1)
      await userEvent.keyboard('{Escape}')
      await waitFor(() => expect(modal).not.toBeVisible())
    })

    await step('Open image2 on thumb2 clicked', async () => {
      await userEvent.click(thumb2)
      const originalImage2 = await waitFor(
        () => canvas.getByRole('img', { name: 'Gallery Image 2' }).parentElement?.parentElement
      )
      await waitFor(() => expect(originalImage2).toHaveClass('slick-active'))
      await userEvent.click(buttonCloseModal)
    })

    await step('Open image1 on thumb1 clicked', async () => {
      await userEvent.click(thumb1)
      const originalImage1 = await waitFor(
        () =>
          canvas.getByRole('img', {
            name: 'Gallery Image 1'
          }).parentElement?.parentElement
      )
      await waitFor(() => expect(originalImage1).toHaveClass('slick-active'))
      await userEvent.click(buttonCloseModal)
    })
  }
}
