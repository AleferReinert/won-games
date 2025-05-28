import { graphql, HttpResponse } from 'msw'

export const profileHandler = graphql.query('Profile', () => {
  return HttpResponse.json({
    data: {
      usersPermissionsUser: {
        data: {
          attributes: {
            username: 'John Doe',
            email: 'johndoe@example.com'
          }
        }
      }
    }
  })
})
