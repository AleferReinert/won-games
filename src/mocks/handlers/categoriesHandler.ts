import { graphql, HttpResponse } from 'msw'

export const categoriesHandler = graphql.query('Categories', () => {
  return HttpResponse.json({
    data: {
      categories: {
        data: [
          {
            attributes: {
              name: 'Action',
              slug: 'action'
            }
          },
          {
            attributes: {
              name: 'Adventure',
              slug: 'adventure'
            }
          },
          {
            attributes: {
              name: 'Arcade',
              slug: 'arcade'
            }
          },
          {
            attributes: {
              name: 'Building',
              slug: 'building'
            }
          },
          {
            attributes: {
              name: 'Comedy',
              slug: 'comedy'
            }
          },
          {
            attributes: {
              name: 'Fantasy',
              slug: 'fantasy'
            }
          },
          {
            attributes: {
              name: 'Fighting',
              slug: 'fighting'
            }
          },
          {
            attributes: {
              name: 'FPP',
              slug: 'fpp'
            }
          },
          {
            attributes: {
              name: 'Historical',
              slug: 'historical'
            }
          },
          {
            attributes: {
              name: 'Horror',
              slug: 'horror'
            }
          },
          {
            attributes: {
              name: 'Mystery',
              slug: 'mystery'
            }
          },
          {
            attributes: {
              name: 'Naval',
              slug: 'naval'
            }
          },
          {
            attributes: {
              name: 'Open World',
              slug: 'open-world'
            }
          },
          {
            attributes: {
              name: 'Point-and-click',
              slug: 'point-and-click'
            }
          },
          {
            attributes: {
              name: 'Puzzle',
              slug: 'puzzle'
            }
          },
          {
            attributes: {
              name: 'Real-time',
              slug: 'real-time'
            }
          },
          {
            attributes: {
              name: 'Role-playing',
              slug: 'role-playing'
            }
          },
          {
            attributes: {
              name: 'Sandbox',
              slug: 'sandbox'
            }
          },
          {
            attributes: {
              name: 'Sci-fi',
              slug: 'sci-fi'
            }
          },
          {
            attributes: {
              name: 'Shooter',
              slug: 'shooter'
            }
          },
          {
            attributes: {
              name: 'Simulation',
              slug: 'simulation'
            }
          },
          {
            attributes: {
              name: 'Stealth',
              slug: 'stealth'
            }
          },
          {
            attributes: {
              name: 'Strategy',
              slug: 'strategy'
            }
          },
          {
            attributes: {
              name: 'Survival',
              slug: 'survival'
            }
          },
          {
            attributes: {
              name: 'Tactical',
              slug: 'tactical'
            }
          },
          {
            attributes: {
              name: 'Turn-based',
              slug: 'turn-based'
            }
          }
        ]
      }
    }
  })
})
