import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { ParseArgsProps, queryStringToGraphqlFilters } from 'utils/filter'

const meta: Meta = {
  title: 'Utils/Filter',
  args: {
    queryString: {
      price: 200,
      'windows-7': 'true',
      'playstation-4': 'true',
      action: 'true',
      'role-playing': 'true',
      sort: 'price:asc'
    },
    filterOptions: [
      {
        name: 'platforms',
        fields: [
          {
            label: 'Windows 7',
            value: 'windows-7'
          },
          {
            label: 'PlayStation 4',
            value: 'playstation-4'
          }
        ]
      },
      {
        name: 'categories',
        fields: [
          {
            label: 'Action',
            value: 'action'
          },
          {
            label: 'Role-playing',
            value: 'role-playing'
          }
        ]
      }
    ]
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
}

export default meta

export const QueryStringToGraphqlFilters: StoryObj = {
  play: ({ args }) => {
    const { queryString, filterOptions } = args as ParseArgsProps
    const parsedQuery = queryStringToGraphqlFilters({
      queryString,
      filterOptions
    })

    expect(parsedQuery).toStrictEqual({
      sort: 'price:asc',
      filters: {
        price: { lte: 200 },
        and: [
          {
            platforms: {
              name: {
                eq: 'Windows 7'
              }
            }
          },
          {
            platforms: {
              name: {
                eq: 'PlayStation 4'
              }
            }
          },
          {
            categories: {
              name: {
                eq: 'Action'
              }
            }
          },
          {
            categories: {
              name: {
                eq: 'Role-playing'
              }
            }
          }
        ]
      }
    })
  },
  render: (args) => {
    const { queryString, filterOptions } = args as ParseArgsProps
    const parsedQuery = queryStringToGraphqlFilters({
      queryString,
      filterOptions
    })
    return (
      <div style={{ fontSize: '1rem' }}>
        <pre>queryString: {JSON.stringify(queryString, null, 2)}</pre>
        <br />
        <pre>Graphql Filters: {JSON.stringify(parsedQuery, null, 2)}</pre>
      </div>
    )
  }
}
