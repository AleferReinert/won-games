/// <reference types="cypress" />

describe('Products page', () => {
  it('Render 9 products and show more on button click', () => {
    cy.visit('/products')
    cy.get('[data-cy="products"]').findAllByRole('article').as('FilteredProducts')
    cy.findByRole('button', { name: /show more/i }).as('ShowMoreButton')

    // Show more products on button click
    cy.get('@FilteredProducts').should('have.length', 9)
    cy.get('@ShowMoreButton').click()
    cy.get('@FilteredProducts').should('have.length.gt', 9)

    // Filter options: Free
    cy.findByRole('radio', { name: `Free` }).click()
    cy.url().should('include', `price=0`)
    cy.wait(1000)
    cy.get('@FilteredProducts')
      .findAllByLabelText('Price')
      .each(($price) => {
        expect($price.text()).to.equal('Free')
      })

    // Filter options: Price under
    cy.filterUnderPrice(50)
    cy.filterUnderPrice(100)
    cy.filterUnderPrice(150)
    cy.filterUnderPrice(200)
  })
})
