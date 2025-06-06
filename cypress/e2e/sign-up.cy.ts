/// <reference types="cypress" />
import { fakeUser } from '../support/generateFakeData'

describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('/sign-up')
    cy.findByRole('button', { name: 'Sign up' }).as('SignUpButton')
    cy.findByLabelText('Full name').as('FullNameInput')
    cy.findByLabelText('E-mail').as('EmailInput')
    cy.findByLabelText('Password').as('PasswordInput')
    cy.findByLabelText('Confirm password').as('ConfirmPasswordInput')
  })

  it('Show error when all fields are empty', () => {
    cy.get('@SignUpButton').click()
    cy.findByText('Full name is required').should('be.visible')
    cy.findByText('E-mail is required').should('be.visible')
    cy.findByText('Password is required').should('be.visible')
  })

  it('Show error when full name must be at least 5 characters', () => {
    cy.signUp('John', 'johndoe@example', '123456')
    cy.findByText('Full name must be at least 5 characters').should('be.visible')
  })

  it('Show error when full name contain numbers', () => {
    cy.signUp('John1 Doe2', 'johndoe@example', '123456')
    cy.findByText('Full name must not contain numbers').should('be.visible')
  })

  it('Show error when invalid e-mail', () => {
    cy.signUp('John Doe', 'johndoe@example', '12345')
    cy.findByText('Invalid e-mail').should('be.visible')
  })

  it('Show error when password must be at least 6 characters', () => {
    cy.signUp('John Doe', 'johndoe@example.com', '12345')
    cy.findByText('Password must be at least 6 characters').should('be.visible')
  })

  it('Show error when passwords do not match', () => {
    cy.signUp('John Doe', 'johndoe@example.com', '123456', '123455')
    cy.findByText('Passwords do not match').should('be.visible')
  })

  it('Show error when trying to create an existing user', () => {
    cy.signUp('John Doe', 'johndoe@example.com', '123456')
    cy.findByText('Email or Username are already taken').should('be.visible')
  })

  it('Success: e-mail sent and confirm email', () => {
    cy.signUp(fakeUser.fullName, fakeUser.email, fakeUser.password)
    cy.url({ timeout: 30000 }).should('include', '/confirm-your-email')
    cy.confirmEmail(fakeUser.email)
  })
})
