/// <reference types="cypress" />

describe('Home page', () => {
  describe('Unauthenticated', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Banner, New Releases, Most Popular, Coming Soon and Free Games', () => {
      cy.toggleBanner()
      cy.get('[data-cy="newReleases"]').within(() => {
        cy.findByRole('heading', { level: 2 }).should('be.visible')
        cy.findByTestId('ProductSliderComponent').should('be.visible')
      })
      cy.get('[data-cy="mostPopular"]').within(() => {
        cy.findByRole('heading', { level: 2 }).should('be.visible')
        cy.findByTestId('HighlightComponent').should('be.visible')
        cy.findByTestId('ProductSliderComponent').should('be.visible')
      })
      cy.get('[data-cy="comingSoon"]').within(() => {
        cy.findByRole('heading', { level: 2 }).should('be.visible')
        cy.findByTestId('HighlightComponent').should('be.visible')
        cy.findByTestId('ProductSliderComponent').should('be.visible')
      })
      cy.get('[data-cy="freeProducts"]').within(() => {
        cy.findByRole('heading', { level: 2 }).should('be.visible')
        cy.findByTestId('HighlightComponent').should('be.visible')
        cy.findByTestId('ProductSliderComponent').should('be.visible')
      })
    })

    it('Add and remove products from cart', () => {
      cy.addAndRemoveProductsFromCart()
    })
  })

  describe('Authenticated', () => {
    it('Sign in, add and remove products from wishlist', () => {
      cy.visit('/')
      cy.goToSignInPageAndLogin('johndoe@example.com', '123456')
      cy.addAndRemoveProductsFromWishlist()
    })
  })
})
