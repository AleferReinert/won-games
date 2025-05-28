/// <reference types="cypress" />

describe('My account - Profile page (Protected Route)', () => {
  beforeEach(() => {
    cy.protectedRoute('/account/profile')
  })
  it('Heading, active status, name, e-mail and logout', () => {
    cy.findByRole('heading', { level: 2, name: 'My profile' }).should('be.visible')
    cy.findByRole('link', { name: 'My profile' }).invoke('attr', 'class').should('include', ' bg-theme-primary')
    cy.findByLabelText('Name').should('have.value', 'John Doe')
    cy.findByLabelText('E-mail').should('have.value', 'johndoe@example.com').should('be.disabled')
    cy.findByRole('button', { name: 'Logout' }).click()
    cy.isUserLoggedOutAndRedirect()
  })
})
