/// <reference types="cypress" />

describe('Wishlist (Protected Route)', () => {
  it('Protected route', () => {
    cy.protectedRoute('/wishlist')
  })
})
