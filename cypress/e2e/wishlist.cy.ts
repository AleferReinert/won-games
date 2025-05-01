/// <reference types="cypress" />

describe('Wishlist (Protected Route)', () => {
  beforeEach(() => {
    cy.protectedRoute('/wishlist')
  })
  it('Add and remove products from cart', () => {
    cy.addAndRemoveProductsFromCart()
  })
})
