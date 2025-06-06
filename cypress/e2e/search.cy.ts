/// <reference types="cypress" />

describe('Search', () => {
  it('Search product and remove filter tag', () => {
    cy.visit('/')

    // Search product
    cy.findByRole('button', { name: 'Search' }).click()
    cy.findByRole('searchbox').type('Alien')
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
    cy.visit('/')

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
})
