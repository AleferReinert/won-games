import { graphql, HttpResponse } from 'msw'
import { ProfileQuery } from 'types/generated'

export const profileHandler = graphql.query<ProfileQuery>('Profile', () => {
  return HttpResponse.json({
    data: {
      usersPermissionsUsers: [
        {
          username: 'John Doe',
          email: 'johndoe@example.com'
        }
      ]
    }
  })
})
