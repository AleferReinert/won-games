import { Session } from 'next-auth'

export const nextAuthSessionMock: Session = {
  expires: '2030-01-01T00:00:00Z',
  user: {
    name: 'John',
    email: 'johndoe@example.com'
  },
  jwt: 'token'
}
