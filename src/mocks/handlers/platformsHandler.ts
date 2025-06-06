import { graphql, HttpResponse } from 'msw'
import { PlatformsQuery } from 'types/generated'

export const platformsHandler = graphql.query<PlatformsQuery>('Platforms', () => {
  return HttpResponse.json({
    data: {
      platforms: [
        {
          name: 'Linux',
          slug: 'linux'
        },
        {
          name: 'Mac',
          slug: 'mac'
        },
        {
          name: 'PlayStation 4',
          slug: 'play-station-4'
        },
        {
          name: 'PlayStation 5',
          slug: 'play-station-5'
        },
        {
          name: 'Windows 10',
          slug: 'windows-10'
        },
        {
          name: 'Windows 7',
          slug: 'windows-7'
        },
        {
          name: 'Windows 8',
          slug: 'windows-8'
        },
        {
          name: 'Xbox Series X',
          slug: 'xbox-series-x'
        }
      ]
    }
  })
})
