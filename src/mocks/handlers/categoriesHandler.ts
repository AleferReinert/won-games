import { graphql, HttpResponse } from 'msw'
import { CategoriesQuery } from 'types/generated'

export const categoriesHandler = graphql.query<CategoriesQuery>('Categories', () => {
  return HttpResponse.json({
    data: {
      categories: [
        {
          name: 'Action',
          slug: 'action'
        },
        {
          name: 'Adventure',
          slug: 'adventure'
        },
        {
          name: 'Arcade',
          slug: 'arcade'
        },
        {
          name: 'Building',
          slug: 'building'
        },
        {
          name: 'Comedy',
          slug: 'comedy'
        },
        {
          name: 'Fantasy',
          slug: 'fantasy'
        },
        {
          name: 'Fighting',
          slug: 'fighting'
        },
        {
          name: 'FPP',
          slug: 'fpp'
        },
        {
          name: 'Historical',
          slug: 'historical'
        },
        {
          name: 'Horror',
          slug: 'horror'
        },
        {
          name: 'Mystery',
          slug: 'mystery'
        },
        {
          name: 'Naval',
          slug: 'naval'
        },
        {
          name: 'Open World',
          slug: 'open-world'
        },
        {
          name: 'Point-and-click',
          slug: 'point-and-click'
        },
        {
          name: 'Puzzle',
          slug: 'puzzle'
        },
        {
          name: 'Real-time',
          slug: 'real-time'
        },
        {
          name: 'Role-playing',
          slug: 'role-playing'
        },
        {
          name: 'Sandbox',
          slug: 'sandbox'
        },
        {
          name: 'Sci-fi',
          slug: 'sci-fi'
        },
        {
          name: 'Shooter',
          slug: 'shooter'
        },
        {
          name: 'Simulation',
          slug: 'simulation'
        },
        {
          name: 'Stealth',
          slug: 'stealth'
        },
        {
          name: 'Strategy',
          slug: 'strategy'
        },
        {
          name: 'Survival',
          slug: 'survival'
        },
        {
          name: 'Tactical',
          slug: 'tactical'
        },
        {
          name: 'Turn-based',
          slug: 'turn-based'
        }
      ]
    }
  })
})
