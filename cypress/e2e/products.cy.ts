/// <reference types="cypress" />

describe('Products page', () => {
  beforeEach(() => {
    cy.visit('/products')
    cy.get('[data-cy="products"]').findAllByRole('article').as('FilteredProducts')
    cy.intercept('POST', '**/graphql', (req) => {
      if (req.body.operationName === 'Products') {
        req.alias = 'getProducts'
      }
    })
  })

  it('Loads 9 products by default and loads more on button click', () => {
    cy.get('@FilteredProducts').should('have.length', 9)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.get('@FilteredProducts').should('have.length.gt', 9)
  })

  it('Filter by price', () => {
    cy.findByRole('radio', { name: `Free` }).click()
    cy.url().should('include', `price=0`)
    cy.wait('@getProducts')
    cy.get('@FilteredProducts')
      .findAllByLabelText('Price')
      .each(($price) => {
        expect($price.text()).to.equal('Free')
      })

    cy.filterUnderPrice(50)
    cy.filterUnderPrice(100)
    cy.filterUnderPrice(150)
    cy.filterUnderPrice(200)
  })

  it('Filter by sort', () => {
    cy.get('@FilteredProducts').first().findByLabelText('Price').as('FirstPrice')
    cy.get('@FilteredProducts').last().findByLabelText('Price').as('LastPrice')

    cy.findByRole('radio', { name: `Low to high` }).click()
    cy.url().should('include', `sort=price%3Aasc`)
    cy.wait('@getProducts')
    cy.isPriceAscending('@FirstPrice', '@LastPrice')

    cy.findByRole('radio', { name: `High to low` }).click()
    cy.url().should('include', `sort=price%3Adesc`)
    cy.wait('@getProducts')
    cy.isPriceDescending('@FirstPrice', '@LastPrice')
  })

  it('Filter by platforms', () => {
    cy.findByRole('checkbox', { name: `linux` }).click()
    cy.url().should('include', `linux=true`)

    cy.findByRole('checkbox', { name: `mac` }).click()
    cy.url().should('include', `mac=true`)

    cy.findByRole('checkbox', { name: `windows` }).click()
    cy.url().should('include', `windows=true`)
  })

  it('Filter by categories', () => {
    cy.findByRole('checkbox', { name: `Action` }).click()
    cy.url().should('include', `action=true`)

    cy.findByRole('checkbox', { name: `Adventure` }).click()
    cy.url().should('include', `adventure=true`)
  })

  it('Filter with empty products', () => {
    cy.findByRole('checkbox', { name: `Naval` }).click()
    cy.findByText('No results found').should('be.visible')
    cy.get('@FilteredProducts').should('have.length', 0)
  })
})
