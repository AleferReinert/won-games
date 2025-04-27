/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('toggleBanner', () => {
  cy.get('[data-testid="BannerSliderComponent"]').within(() => {
    cy.get('.slick-track > :nth-child(1)').as('firstBanner')
    cy.get('.slick-track > :nth-child(2)').as('secondBanner')
    cy.get('.slick-dots > :nth-child(1)').as('firstDot')
    cy.get('.slick-dots > :nth-child(2)').as('secondDot')

    cy.get('@firstBanner').should('be.visible')
    cy.get('@secondDot').click()
    cy.get('@firstBanner').should('not.be.visible')
    cy.get('@secondBanner').should('be.visible')

    cy.get('@firstDot').click()
    cy.get('@secondBanner').should('not.be.visible')
    cy.get('@firstBanner').should('be.visible')
  })
})
