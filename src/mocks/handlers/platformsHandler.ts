import { graphql, HttpResponse } from 'msw'

export const platformsHandler = graphql.query('Platforms', () => {
  return HttpResponse.json({
    data: {
      platforms: {
        data: [
          {
            attributes: {
              name: 'Linux',
              slug: 'linux'
            }
          },
          {
            attributes: {
              name: 'Mac',
              slug: 'mac'
            }
          },
          {
            attributes: {
              name: 'PlayStation 4',
              slug: 'play-station-4'
            }
          },
          {
            attributes: {
              name: 'PlayStation 5',
              slug: 'play-station-5'
            }
          },
          {
            attributes: {
              name: 'Windows 10',
              slug: 'windows-10'
            }
          },
          {
            attributes: {
              name: 'Windows 7',
              slug: 'windows-7'
            }
          },
          {
            attributes: {
              name: 'Windows 8',
              slug: 'windows-8'
            }
          },
          {
            attributes: {
              name: 'Xbox Series X',
              slug: 'xbox-series-x'
            }
          }
        ]
      }
    }
  })
})
