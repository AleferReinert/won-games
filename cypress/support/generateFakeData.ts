import { faker } from '@faker-js/faker'

export const fakeFullName = faker.person.fullName()
export const fakeEmail = `${fakeFullName.replace(/ /g, '_').replace('.', '')}@test-e2e.com`
export const fakeUser = {
  fullName: fakeFullName,
  email: fakeEmail,
  password: faker.internet.password()
}

export const secondFakeFullName = faker.person.fullName()
export const secondFakeEmail = `${secondFakeFullName.replace(/ /g, '_').replace('.', '')}@test-e2e.com`
export const secondFakeUser = {
  fullName: secondFakeFullName,
  email: secondFakeEmail,
  password: faker.internet.password()
}
