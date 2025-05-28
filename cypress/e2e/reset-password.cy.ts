/// <reference types="cypress" />

describe('Reset password', () => {
  beforeEach(() => {
    cy.visit('/reset-password?code=validCode')
    cy.findByLabelText('Password').as('PasswordInput')
    cy.findByLabelText('Confirm password').as('ConfirmPasswordInput')
    cy.findByRole('button', { name: 'Reset password' }).as('ResetPasswordButton')
  })

  it('Show error when empty fields', () => {
    cy.get('@ResetPasswordButton').click()
    cy.findByText('Password is required').should('be.visible')
  })

  it('Show error when password must be at least 6 characters', () => {
    cy.get('@PasswordInput').type('123')
    cy.get('@ResetPasswordButton').click()
    cy.findByText('Password must be at least 6 characters').should('be.visible')
  })

  it('Show error when passwords do not match', () => {
    cy.get('@PasswordInput').type('123456')
    cy.get('@ConfirmPasswordInput').type('654321')
    cy.get('@ResetPasswordButton').click()
    cy.findByText('Passwords do not match').should('be.visible')
  })

  it('Show error when code is invalid or expired', () => {
    cy.get('@PasswordInput').type('123456')
    cy.get('@ConfirmPasswordInput').type('123456')
    cy.get('@ResetPasswordButton').click()
    cy.findByText('Expired link').should('be.visible')
  })

  it('Success reset password', () => {
    cy.intercept('POST', '/api/auth/reset-password', {
      statusCode: 200,
      body: { user: { email: 'johndoe@example.com' } }
    })
    cy.intercept('POST', '/api/auth/callback/credentials', {
      statusCode: 200,
      body: { user: { email: 'johndoe@example.com' } }
    })
    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: { user: { name: 'John Doe', email: 'johndoe@example.com' } }
    })
    cy.get('@PasswordInput').type('123456')
    cy.get('@ConfirmPasswordInput').type('123456')
    cy.get('@ResetPasswordButton').click()
    cy.findByText('Password changed').should('be.visible')
    cy.isUserLoggedInAndRedirect('John') // Todo: now working on cypress only
  })
})
