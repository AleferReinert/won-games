/// <reference types="cypress" />

describe('Wishlist (Protected Route)', () => {
  beforeEach(() => {
    cy.protectedRoute('/wishlist')
  })

  it('Add and remove products from cart', () => {
    cy.addAndRemoveProductsFromCart()
  })

  it('Add and remove products from wishlist', () => {
    cy.addAndRemoveProductsFromWishlist()
  })

  it('Check if added products are displayed here', () => {
    cy.findByLabelText('wishlist products').as('wishlistList')
    cy.findByText('Your wishlist is empty', { timeout: 30000 }).should('be.visible')
    cy.get('@wishlistList').findAllByTestId('ProductComponent').should('have.length', 0)

    cy.addToWishlistFromShowcase({ quantity: 3 })
    cy.get('@wishlistList').findAllByTestId('ProductComponent').should('have.length', 3)

    cy.removeFromWishlistFromShowcase({ quantity: 2 })
    cy.get('@wishlistList').findAllByTestId('ProductComponent').should('have.length', 1)

    cy.removeFromWishlistFromShowcase({ quantity: 1 })
    cy.get('@wishlistList').findAllByTestId('ProductComponent').should('have.length', 0)
    cy.findByText('Your wishlist is empty').should('be.visible')
  })
})
