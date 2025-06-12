/// <reference types="cypress" />

describe('Mobile: Explore page', () => {
  beforeEach(() => {
    cy.viewport('iphone-3')
    cy.visit('/explore')
  })

  it('Remove one platform when multiple are selected', () => {
    cy.findByRole('button', { name: 'Open filters' }).click()
    cy.findByLabelText('Linux').click()
    cy.findByLabelText('Mac').click()
    cy.findByLabelText('Windows 7').click()
    cy.findByRole('button', { name: 'Filter' }).click()

    cy.get('ul[aria-label="Applied filters"]').as('AppliedFilters')
    cy.get('@AppliedFilters').findByText('Linux').should('be.visible')
    cy.get('@AppliedFilters').findByText('Mac').should('be.visible')
    cy.get('@AppliedFilters').findByText('Windows 7').should('be.visible')

    // Remove Windows 7
    cy.get('@AppliedFilters').findAllByRole('button', { name: 'Remove' }).eq(2).click()
    cy.get('@AppliedFilters').findByText('Linux').should('be.visible')
    cy.get('@AppliedFilters').findByText('Mac').should('be.visible')
    cy.get('@AppliedFilters').findByText('Windows 7').should('be.not.visible')
  })

  it('Remove one categorie when multiple are selected', () => {
    cy.findByRole('button', { name: 'Open filters' }).click()
    cy.findByLabelText('Action').click()
    cy.findByLabelText('Adventure').click()
    cy.findByLabelText('Arcade').click()
    cy.findByRole('button', { name: 'Filter' }).click()

    cy.get('ul[aria-label="Applied filters"]').as('AppliedFilters')
    cy.get('@AppliedFilters').findByText('Action').should('be.visible')
    cy.get('@AppliedFilters').findByText('Adventure').should('be.visible')
    cy.get('@AppliedFilters').findByText('Arcade').should('be.visible')

    // Remove Arcade
    cy.get('@AppliedFilters').findAllByRole('button', { name: 'Remove' }).eq(2).click()
    cy.get('@AppliedFilters').findByText('Action').should('be.visible')
    cy.get('@AppliedFilters').findByText('Adventure').should('be.visible')
    cy.get('@AppliedFilters').findByText('Arcade').should('be.not.visible')
  })
})
