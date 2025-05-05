import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import { FilterContext } from 'contexts/FilterContext'
import { filterContextMock } from 'mocks/filterContext.mock'
import FilterComponent from './Filter'

const meta: Meta<typeof FilterComponent> = {
  title: 'Components/Filter',
  component: FilterComponent,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '280px' }}>
        <FilterContext.Provider value={filterContextMock}>
          <Story />
        </FilterContext.Provider>
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

    await step('Button open filter', () => {
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

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  }
}
