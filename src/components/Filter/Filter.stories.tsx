import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import FilterComponent from './Filter'
import filterMock from './mock'
import { jsMediaQuery } from 'utils/tests/helpers'
import theme from 'styles/theme'

const meta: Meta<typeof FilterComponent> = {
  title: 'Components/Filter',
  component: FilterComponent,
  args: {
    items: filterMock
  }
}

export default meta

type Story = StoryObj<typeof FilterComponent>

export const Mobile: Story = {
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
      const platformOptions = [/windows/i, /mac/i, /linux/i]
      const categoryOptions = [/action/i, /adventure/i, /fps/i]
      const buttonFilter = canvas.getByRole('button', { name: 'Filter' })

      expect(buttonOpen).toBeInTheDocument()
      expect(wrapper).toHaveStyle({ opacity: '0' })

      // Open filter
      await userEvent.click(buttonOpen)
      waitFor(async () => {
        await expect(wrapper).toHaveStyle({ opacity: '1' })
        const buttonClose = canvas.getByRole('button', {
          name: /close filters/i
        })
        const titles = ['Price', 'Sort by', 'Platform', 'Category']
        const priceOptions = [
          /under \$50/i,
          /under \$100/i,
          /under \$150/i,
          /under \$200/i,
          /free/i,
          /discounted/i
        ]

        expect(buttonClose).toBeInTheDocument()
        for (const title of titles) {
          expect(
            canvas.getByRole('heading', { name: title })
          ).toBeInTheDocument()
        }
        for (const input of [
          ...priceOptions,
          ...platformOptions,
          ...categoryOptions
        ]) {
          expect(
            canvas.getByRole('checkbox', { name: input })
          ).toBeInTheDocument()
        }
        for (const input of sortByOptions) {
          expect(canvas.getByRole('radio', { name: input })).toBeInTheDocument()
        }

        expect(buttonFilter).toBeInTheDocument()

        // Close filter
        await setTimeout(() => {
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
      windows: true,
      'sort-by': 'low-to-high'
    },
    onFilter: jest.fn()
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const windowsCheckbox = canvas.getByRole('checkbox', { name: /windows/i })
    const lowToHightCheckbox = canvas.getByRole('radio', {
      name: /low to high/i
    })
    const button = canvas.getByRole('button', { name: /filter/i })

    // Initial values
    expect(windowsCheckbox).toBeChecked()
    expect(lowToHightCheckbox).toBeChecked()

    // onFilter
    await userEvent.click(button)
    expect(args.onFilter).toBeCalledWith({
      windows: true,
      'sort-by': 'low-to-high'
    })
  }
}

export const OnUserChange: Story = {
  args: {
    onFilter: jest.fn()
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const linuxCheckbox = canvas.getByRole('checkbox', { name: /linux/i })
    const button = canvas.getByRole('button', { name: /filter/i })

    await userEvent.click(linuxCheckbox)
    await userEvent.click(button)
    expect(args.onFilter).toBeCalledWith({
      linux: true
    })
  }
}
