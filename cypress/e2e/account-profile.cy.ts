/// <reference types="cypress" />

describe('My account - Profile page (Protected Route)', () => {
  it('Show user profile (name, e-mail) and logout', () => {
    cy.protectedRoute('/account/profile')
    cy.findByLabelText('Name').should('have.value', 'John Doe')
    cy.findByLabelText('E-mail').should('have.value', 'johndoe@example.com').should('be.disabled')
    cy.findByRole('link', { name: 'Logout' }).click()
    cy.isUserLoggedOutAndRedirect()
  })
})
