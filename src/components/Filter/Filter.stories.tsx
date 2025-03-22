import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import { filterMock } from '../../mocks/filter.mock'
import FilterComponent from './Filter'

const meta: Meta<typeof FilterComponent> = {
  title: 'Components/Filter',
  component: FilterComponent,
  args: {
    filterOptions: filterMock
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '280px' }}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FilterComponent>

export const Mobile: Story = {
  args: {
    handleFilter: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'xxsmall'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const buttonOpen = canvas.getByRole('button', { name: 'Open filters' })
    const filterComponent = canvas.getByTestId('FilterComponent')

    await step('Button open filter', async () => {
      expect(buttonOpen).toBeVisible()
    })

    await step('FilterComponent hidden', () => {
      expect(filterComponent).not.toBeVisible()
    })

    await step('Open filter: FilterComponent visible, close button visible, button Filter visible', async () => {
      userEvent.click(buttonOpen)
      await waitFor(() => {
        const buttonClose = canvas.getByRole('button', { name: 'Close filters' })
        const buttonFilter = canvas.getByRole('button', { name: 'Filter' })
        expect(filterComponent).toBeVisible()
        expect(buttonClose).toBeVisible()
        expect(buttonFilter).toBeVisible()
      })
    })

    await step('Price options', () => {
      const title = canvas.getByRole('heading', { name: 'Price' })
      const priceOptions = ['Under $50', 'Under $100', 'Under $150', 'Under $200', 'Free']
      expect(title).toBeVisible()
      for (const input of priceOptions) {
        expect(canvas.getByRole('radio', { name: input })).toBeVisible()
      }
    })

    await step('Sort by options', () => {
      const title = canvas.getByRole('heading', { name: 'Sort by' })
      const sortByOptions = ['High to low', 'Low to high']
      expect(title).toBeVisible()
      for (const sortByItem of sortByOptions) {
        expect(canvas.getByRole('radio', { name: sortByItem })).toBeVisible()
      }
    })

    await step('Platforms options', () => {
      const title = canvas.getByRole('heading', { name: 'Platforms' })
      const platformOptions = [
        'Linux',
        'Mac',
        'Nintendo Switch',
        'Nintendo Wii',
        'PlayStation 2',
        'PlayStation 3',
        'PlayStation 4',
        'PlayStation 5',
        'Windows 10',
        'Windows 11',
        'Windows 7',
        'Windows 8',
        'Windows Vista',
        'Windows XP',
        'Xbox One',
        'Xbox Series X|S'
      ]
      expect(title).toBeVisible()
      for (const platform of platformOptions) {
        expect(canvas.getByRole('checkbox', { name: platform })).toBeVisible()
      }
    })

    await step('Categories options', () => {
      const title = canvas.getByRole('heading', { name: 'Categories' })
      const categoryOptions = [
        'Action',
        'Adventure',
        'Arcade',
        'Building',
        'Comedy',
        'Fantasy',
        'Fighting',
        'FPP',
        'FPS',
        'Historical',
        'Horror',
        'Mystery',
        'Naval',
        'Open World',
        'Point-and-click',
        'Puzzle',
        'Real-time',
        'Role-playing',
        'Sandbox',
        'Sci-fi',
        'Shooter',
        'Simulation',
        'Stealth',
        'Strategy',
        'Survival',
        'Tactical',
        'Turn-based'
      ]
      expect(title).toBeVisible()
      for (const category of categoryOptions) {
        expect(canvas.getByRole('checkbox', { name: category })).toBeVisible()
      }
    })

    await step('FilterComponent hidden on buttonClose click', async () => {
      const buttonClose = canvas.getByRole('button', { name: 'Close filters' })
      userEvent.click(buttonClose)
      await waitFor(() => expect(filterComponent).not.toBeVisible())
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
    handleFilter: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)

    await step('Initial values checked', async () => {
      const priceRadio = canvas.getByRole('radio', { name: 'Under $200' })
      const windows7Checkbox = canvas.getByRole('checkbox', { name: 'Windows 7' })
      const windows8Checkbox = canvas.getByRole('checkbox', { name: 'Windows 8' })
      const actionCheckbox = canvas.getByRole('checkbox', { name: 'Action' })
      const sortRadio = canvas.getByRole('radio', { name: /low to high/i })
      expect(priceRadio).toBeChecked()
      expect(windows7Checkbox).toBeChecked()
      expect(windows8Checkbox).toBeChecked()
      expect(actionCheckbox).toBeChecked()
      expect(sortRadio).toBeChecked()
    })

    await step('Filter called with initial values', async () => {
      await waitFor(() =>
        expect(args.handleFilter).toHaveBeenCalledWith({
          price: 200,
          'windows-7': 'true',
          'windows-8': 'true',
          action: 'true',
          sort: 'price:asc'
        })
      )
    })
  }
}

export const OnUserChange: Story = {
  args: {
    handleFilter: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)

    await step('Filter called with mac', async () => {
      const macCheckbox = canvas.getByRole('checkbox', { name: /mac/i })
      await userEvent.click(macCheckbox)
      await waitFor(() => expect(args.handleFilter).toHaveBeenCalledWith({ mac: true }))
    })
  }
}
