import { expect, jest } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import theme from 'styles/theme'
import { jsMediaQuery } from 'utils/tests/helpers'
import FilterComponent from './Filter'
import { filterOptionsMock } from './mock'

const meta: Meta<typeof FilterComponent> = {
  title: 'Components/Filter',
  component: FilterComponent,
  args: {
    filterOptions: filterOptionsMock
  }
}

export default meta

type Story = StoryObj<typeof FilterComponent>

export const Mobile: Story = {
  args: {
    handleFilter: jest.fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'xxsmall'
    }
  },
  play: async ({ canvasElement }) => {
    jsMediaQuery.lessThan(theme.breakpoint.medium, async () => {
      const canvas = within(canvasElement)
      const buttonOpen = canvas.getByRole('button', { name: /open filters/i })
      const wrapper = buttonOpen.nextElementSibling
      const sortByOptions = [/high to low/i, /low to high/i]
      const platformOptions = [/windows 7/i, /windows 8/i, /mac/i]
      const categoryOptions = [/action/i, /adventure/i, /fps/i]
      const buttonFilter = canvas.getByRole('button', { name: 'Filter' })
      const priceOptions = [
        /under \$50/i,
        /under \$100/i,
        /under \$150/i,
        /under \$200/i,
        /free/i
      ]

      expect(buttonOpen).toBeInTheDocument()
      expect(wrapper).toHaveStyle({ opacity: '0' })

      // Open filter
      await userEvent.click(buttonOpen)
      waitFor(async () => {
        await expect(wrapper).toHaveStyle({ opacity: '1' })
        const buttonClose = canvas.getByRole('button', {
          name: /close filters/i
        })
        const titles = ['Price', 'Sort by', 'Platforms', 'Categories']

        expect(buttonClose).toBeInTheDocument()
        for (const title of titles) {
          expect(
            canvas.getByRole('heading', { name: title })
          ).toBeInTheDocument()
        }
        for (const input of platformOptions) {
          expect(
            canvas.getByRole('checkbox', { name: input })
          ).toBeInTheDocument()
        }
        for (const input of categoryOptions) {
          expect(
            canvas.getByRole('checkbox', { name: input })
          ).toBeInTheDocument()
        }
        for (const input of priceOptions) {
          expect(canvas.getByRole('radio', { name: input })).toBeInTheDocument()
        }
        for (const input of sortByOptions) {
          expect(canvas.getByRole('radio', { name: input })).toBeInTheDocument()
        }

        expect(buttonFilter).toBeInTheDocument()

        // Close filter
        setTimeout(() => {
          userEvent.click(buttonClose)
          setTimeout(() => {
            expect(wrapper).toHaveStyle({ opacity: '0' })
          }, 1000)
        }, 1000)
      })
    })
  }
}

export const InitialValues: Story = {
  args: {
    initialValues: {
      price: 200,
      'windows-7': 'true',
      'windows-8': 'true',
      action: 'true',
      sort: 'price:asc'
    },
    handleFilter: jest.fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const priceRadio = canvas.getByRole('radio', { name: 'Under $200' })
    const windows7Checkbox = canvas.getByRole('checkbox', { name: 'Windows 7' })
    const windows8Checkbox = canvas.getByRole('checkbox', { name: 'Windows 8' })
    const actionCheckbox = canvas.getByRole('checkbox', { name: 'Action' })
    const sortRadio = canvas.getByRole('radio', {
      name: /low to high/i
    })

    // Initial values
    expect(priceRadio).toBeChecked()
    expect(windows7Checkbox).toBeChecked()
    expect(windows8Checkbox).toBeChecked()
    expect(actionCheckbox).toBeChecked()
    expect(sortRadio).toBeChecked()

    await waitFor(() =>
      expect(args.handleFilter).toHaveBeenCalledWith({
        price: 200,
        'windows-7': 'true',
        'windows-8': 'true',
        action: 'true',
        sort: 'price:asc'
      })
    )
  }
}

export const OnUserChange: Story = {
  args: {
    handleFilter: jest.fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const macCheckbox = canvas.getByRole('checkbox', { name: /mac/i })

    await userEvent.click(macCheckbox)
    await waitFor(() =>
      expect(args.handleFilter).toHaveBeenCalledWith({
        mac: true
      })
    )
  }
}
