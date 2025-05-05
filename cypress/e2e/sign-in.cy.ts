/// <reference types="cypress" />

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('/sign-in')
    cy.findByLabelText('E-mail').as('EmailInput')
    cy.findByLabelText('Password').as('PasswordInput')
  })

  it('Show error when all fields are empty', () => {
    cy.findByRole('button', { name: 'Sign in' }).click()
    cy.findByText('E-mail is required').should('be.visible')
    cy.findByText('Password is required').should('be.visible')
  })

  it('Show error when e-mail or password incorrect', () => {
    cy.get('@EmailInput').type('johndoe@example.com')
    cy.get('@PasswordInput').type('failpassword')
    cy.findByRole('button', { name: 'Sign in' }).click()
    cy.findByText('E-mail or password incorrect').should('be.visible')
  })

  it('Sign in, redirect to home and logout', () => {
    cy.signIn('johndoe@example.com', '123456')
    cy.isUserLoggedInAndRedirect('John')
    cy.findByRole('button', { name: 'My account' }).click()
    cy.findByRole('link', { name: 'Logout' }).click()
    cy.findByRole('link', { name: 'Sign in' }).should('be.visible')
  })
})
