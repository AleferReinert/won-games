/// <reference types="cypress" />

describe('Home page', () => {
  it('Banner, New Releases, Most Populars, Coming Soon and Free Games', () => {
    cy.visit('/')
    cy.toggleBanner()
    cy.get(`[data-cy='newReleases']`).should('be.visible')
    cy.get(`[data-cy='mostPopulars']`).should('be.visible')
    cy.get(`[data-cy='comingSoon']`).should('be.visible')
    cy.get(`[data-cy='freeGames']`).should('be.visible')
  })
})
