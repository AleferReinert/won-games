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
    cy.get('@FullNameInput').type('john')
    cy.get('@SignUpButton').click()
    cy.findByText('Full name must be at least 5 characters').should('be.visible')
  })

  it('Show error when full name must not contain numbers', () => {
    cy.get('@FullNameInput').type('John123')
    cy.get('@SignUpButton').click()
    cy.findByText('Full name must not contain numbers').should('be.visible')
  })

  it('Show error when invalid e-mail', () => {
    cy.get('@FullNameInput').type('John Doe')
    cy.get('@EmailInput').type('john@doe')
    cy.get('@SignUpButton').click()
    cy.findByText('Invalid e-mail').should('be.visible')
  })

  it('Show error when password must be at least 6 characters', () => {
    cy.get('@FullNameInput').type('John Doe')
    cy.get('@EmailInput').type('johndoe@example.com')
    cy.get('@PasswordInput').type('123')
    cy.get('@SignUpButton').click()
    cy.findByText('Password must be at least 6 characters').should('be.visible')
  })

  it('Show error when passwords do not match', () => {
    cy.get('@FullNameInput').type('John Doe')
    cy.get('@EmailInput').type('johndoe@example.com')
    cy.get('@PasswordInput').type('123456')
    cy.get('@ConfirmPasswordInput').type('123455')
    cy.get('@SignUpButton').click()
    cy.findByText('Passwords do not match').should('be.visible')
  })

  it('Show error when trying to create an existing user', () => {
    cy.get('@FullNameInput').type('John Doe')
    cy.get('@EmailInput').type('johndoe@example.com')
    cy.get('@PasswordInput').type('123456')
    cy.get('@ConfirmPasswordInput').type('123456')
    cy.get('@SignUpButton').click()
    cy.findByText('Email or Username are already taken').should('be.visible')
  })

  it('Create user, login and redirect to home', () => {
    cy.get('@FullNameInput').type(fakeUser.fullName)
    cy.get('@EmailInput').type(fakeUser.email)
    cy.get('@PasswordInput').type(fakeUser.password)
    cy.get('@ConfirmPasswordInput').type(fakeUser.password)
    cy.get('@SignUpButton').click()
    cy.isUserLoggedInAndRedirect(fakeUser.fullName)
  })
})
