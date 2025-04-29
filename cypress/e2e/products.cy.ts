/// <reference types="cypress" />

describe('Products page', () => {
  it('Render 9 products and show more on button click', () => {
    cy.visit('/products')
    cy.get('[data-cy="products"]').findAllByRole('article').as('FilterProducts')
    cy.findByRole('button', { name: /show more/i }).as('ShowMoreButton')

    cy.get('@FilterProducts').should('have.length', 9)
    cy.get('@ShowMoreButton').click()
    cy.get('@FilterProducts').should('have.length.gt', 9)
  })
})
