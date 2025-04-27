/// <reference types="cypress" />

describe('Home page', () => {
  it('Banner, New Releases, Most Populars, Coming Soon and Free Games', () => {
    cy.visit('/')
    cy.toggleBanner()
    cy.get('[data-cy="newReleases"]').within(() => {
      cy.findByRole('heading', { level: 2 }).should('be.visible')
      cy.findByTestId('ProductSliderComponent').should('be.visible')
    })
    cy.get('[data-cy="mostPopulars"]').within(() => {
      cy.findByRole('heading', { level: 2 }).should('be.visible')
      cy.findByTestId('HighlightComponent').should('be.visible')
      cy.findByTestId('ProductSliderComponent').should('be.visible')
    })
    cy.get('[data-cy="comingSoon"]').within(() => {
      cy.findByRole('heading', { level: 2 }).should('be.visible')
      cy.findByTestId('HighlightComponent').should('be.visible')
      cy.findByTestId('ProductSliderComponent').should('be.visible')
    })
    cy.get('[data-cy="freeGames"]').within(() => {
      cy.findByRole('heading', { level: 2 }).should('be.visible')
      cy.findByTestId('HighlightComponent').should('be.visible')
      cy.findByTestId('ProductSliderComponent').should('be.visible')
    })
  })
})
