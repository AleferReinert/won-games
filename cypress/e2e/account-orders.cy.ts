/// <reference types="cypress" />

describe('My account - Orders page (Protected Route)', () => {
  it('Protected route', () => {
    cy.protectedRoute('/account/orders')
  })
})
