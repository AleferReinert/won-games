import { MockedResponse } from '@apollo/client/testing'
import { PLATFORMS } from 'graphql/queries/platforms'
import { PlatformsQuery } from 'types/generated'

export const platformsResponseMock: MockedResponse<PlatformsQuery> = {
  request: {
    query: PLATFORMS
  },
  result: {
    data: {
      platforms: {
        data: [
          {
            attributes: {
              name: 'linux',
              slug: 'linux'
            }
          },
          {
            attributes: {
              name: 'mac',
              slug: 'mac'
            }
          },
          {
            attributes: {
              name: 'windows',
              slug: 'windows'
            }
          }
        ]
      }
    }
  }
}
