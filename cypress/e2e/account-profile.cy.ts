/// <reference types="cypress" />

describe('My account - Profile page (Protected Route)', () => {
  beforeEach(() => {
    cy.protectedRoute('/account/profile')
  })

  it('Show user profile (name, e-mail) and logout', () => {
    cy.findByLabelText('Name').should('have.value', 'John Doe')
    cy.findByLabelText('E-mail').should('have.value', 'johndoe@example.com').should('be.disabled')
    cy.findByRole('link', { name: 'Logout' }).click()
    cy.isUserLoggedOutAndRedirect()
  })
})
