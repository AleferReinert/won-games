/// <reference types="cypress" />

describe('My account - Orders page (Protected Route)', () => {
  beforeEach(() => {
    cy.protectedRoute('/account/orders')
  })
  it('Title and active status', () => {
    cy.findByRole('heading', { level: 2, name: 'My orders' }).should('be.visible')
    cy.findByRole('link', { name: 'My orders' }).invoke('attr', 'class').should('include', ' bg-theme-primary')
  })
})
