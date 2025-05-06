/// <reference types="cypress" />

describe('Full purchase of free product', () => {
  it('Protected route', () => {
    cy.protectedRoute('/')
    cy.findByRole('link', { name: 'Sign up' }).click()
  })
})
