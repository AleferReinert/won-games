import { MockedResponse } from '@apollo/client/testing'
import { PLATFORMS } from 'graphql/queries/platforms'
import { PlatformsQuery } from 'types/generated'

export const platformsResponseMock: MockedResponse<PlatformsQuery> = {
  request: {
    query: PLATFORMS
  },
  result: {
    data: {
      platforms: [
        {
          name: 'linux',
          slug: 'linux'
        },
        {
          name: 'mac',
          slug: 'mac'
        },
        {
          name: 'windows',
          slug: 'windows'
        }
      ]
    }
  }
}
