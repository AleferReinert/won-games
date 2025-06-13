/// <reference types="cypress" />
import { fakeEmail } from '../support/generateFakeData'

describe('Forgot password', () => {
  beforeEach(() => {
    cy.visit('/forgot-password')
    cy.findByLabelText('E-mail').as('EmailInput')
    cy.findByRole('button', { name: 'Send e-mail' }).as('SendEmailButton')
  })

  it('Show error when invalid e-mail', () => {
    cy.get('@EmailInput').type('invalid@email')
    cy.get('@SendEmailButton').click()
    cy.findByText('Invalid e-mail').should('be.visible')
  })

  it('Valid form', () => {
    cy.get('@EmailInput').type(fakeEmail)
    cy.get('@SendEmailButton').click()
    cy.findByText(`Check your inbox! We've sent you a reset link.`).should('be.visible')

    // cy.wait(10000)
    // cy.maildevGetLastMessage().then((response) => {
    //   expect(response.to[0].address).to.equal(fakeEmail.toLowerCase())
    //   cy.document().invoke('write', response.html)
    //   cy.get('a')
    //     .contains('Reset Password')
    //     .invoke('attr', 'href')
    //     .then((href) => cy.visit(href))
    // })
    // cy.findByLabelText('Password').as('PasswordInput')
    // cy.findByLabelText('Confirm password').as('ConfirmPasswordInput')
    // cy.findByRole('button', { name: 'Reset password' }).as('ResetPasswordButton')
  })
})

// describe('Reset password', () => {
//   beforeEach(() => {

//   })

//   it('Show error when empty fields', () => {
//     cy.get('@ResetPasswordButton').click()
//     cy.findByText('Password is required').should('be.visible')
//   })

//   it('Show error when password must be at least 6 characters', () => {
//     cy.get('@PasswordInput').type('123')
//     cy.get('@ResetPasswordButton').click()
//     cy.findByText('Password must be at least 6 characters').should('be.visible')
//   })

//   it('Show error when passwords do not match', () => {
//     cy.get('@PasswordInput').type('123456')
//     cy.get('@ConfirmPasswordInput').type('654321')
//     cy.get('@ResetPasswordButton').click()
//     cy.findByText('Passwords do not match').should('be.visible')
//   })

//   it('Show error when code is invalid or expired', () => {
//     cy.get('@PasswordInput').type('123456')
//     cy.get('@ConfirmPasswordInput').type('123456')
//     cy.get('@ResetPasswordButton').click()
//     cy.findByText('Expired link').should('be.visible')
//   })

//   it('Success reset password', () => {
//     cy.intercept('POST', '/api/auth/reset-password', {
//       statusCode: 200,
//       body: { user: { email: 'johndoe@example.com' } }
//     })
//     cy.intercept('POST', '/api/auth/callback/credentials', {
//       statusCode: 200,
//       body: { user: { email: 'johndoe@example.com' } }
//     })
//     cy.intercept('GET', '/api/auth/session', {
//       statusCode: 200,
//       body: { user: { name: 'John Doe', email: 'johndoe@example.com' } }
//     })
//     cy.get('@PasswordInput').type('123456')
//     cy.get('@ConfirmPasswordInput').type('123456')
//     cy.get('@ResetPasswordButton').click()
//     cy.findByText('Password changed').should('be.visible')
//     // Todo: signIn is not working on cypress only
//     // cy.isUserLoggedInAndRedirect('John')
//   })
// })
