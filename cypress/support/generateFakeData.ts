import { faker } from '@faker-js/faker'

export const fakeFullName = faker.person.fullName()
export const fakeEmail = `${fakeFullName.replace(/ /g, '_')}@test-e2e.com`

export const fakeUser = {
  fullName: fakeFullName,
  email: fakeEmail,
  password: faker.internet.password()
}
