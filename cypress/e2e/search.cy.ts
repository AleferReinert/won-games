/// <reference types="cypress" />

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Search product and remove filter tag', () => {
    // Search product
    cy.findByRole('button', { name: 'Search' }).click()
    cy.wait(200)

    // Show close search button
    cy.findByRole('button', { name: 'Search' }).should('not.exist')
    cy.findByRole('button', { name: 'Close search' }).should('be.visible')

    // Hidden close button on type
    cy.findByRole('searchbox').type('Alien')
    cy.findByRole('button', { name: 'Search' }).should('be.visible')
    cy.findByRole('button', { name: 'Close search' }).should('not.exist')
    cy.findByRole('button', { name: 'Search' }).click()

    // Go to explore to view results
    cy.url({ timeout: 30000 }).should('include', 'explore?search=Alien')

    // Visible tag with query
    cy.findByLabelText('Applied filters').as('AppliedFilters')
    cy.get('@AppliedFilters').findByText('Results for').should('be.visible')
    cy.get('@AppliedFilters').findByText('Alien').should('be.visible')

    // Correct results
    cy.findByTestId('ProductComponent').findByRole('heading', { level: 3 }).should('contain', 'Alien')

    // Remove tag
    cy.get('@AppliedFilters').findByRole('button', { name: 'Remove' }).click()
    cy.findByText('Results for', { timeout: 30000 }).should('not.exist')
  })

  it('Search product on enter', () => {
    // Search product
    cy.findByRole('button', { name: 'Search' }).click()
    cy.findByRole('searchbox').type('Alien').type('{enter}')

    // Go to explore to view results
    cy.url({ timeout: 30000 }).should('include', 'explore?search=Alien')

    // Visible tag with query
    cy.findByLabelText('Applied filters').as('AppliedFilters')
    cy.get('@AppliedFilters').findByText('Results for').should('be.visible')
    cy.get('@AppliedFilters').findByText('Alien').should('be.visible')
  })

  it('Close search and clear value on remove tag when search is open', () => {
    // Search product
    cy.findByRole('button', { name: 'Search' }).click()
    cy.findByRole('searchbox').type('First query')
    cy.findByRole('button', { name: 'Search' }).click()

    // Go to explore to view results
    cy.url({ timeout: 30000 }).should('include', 'explore?search=First+query')

    // Open search again and type
    cy.findByRole('button', { name: 'Search' }).click()
    cy.findByRole('searchbox').type('Second query')

    // Remove tag
    cy.get('[aria-label="Applied filters"]').findByRole('button', { name: 'Remove' }).click()
    cy.findByRole('searchbox').should('have.value', '')
    cy.findByRole('searchbox').should('not.be.visible')
  })
})
