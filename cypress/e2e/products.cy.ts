/// <reference types="cypress" />

describe('Products page', () => {
  beforeEach(() => {
    cy.visit('/products')
    cy.get('[data-cy="products"]').findAllByTestId('ProductComponent').as('FilteredProducts')
  })

  it('Loads 9 products by default and loads more on button click', () => {
    cy.get('@FilteredProducts').should('have.length', 9)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.get('@FilteredProducts').should('have.length.gt', 9)
  })

  it('Filter by price', () => {
    cy.selectFilterAndCheckUrl('radio', 'Free', 'price=0')
    cy.wait(2000)
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

    cy.selectFilterAndCheckUrl('radio', 'Low to high', 'sort=price%3Aasc')
    cy.wait(2000)
    cy.isPriceSorted('@FirstPrice', '@LastPrice', 'asc')

    cy.selectFilterAndCheckUrl('radio', 'High to low', 'sort=price%3Adesc')
    cy.wait(2000)
    cy.isPriceSorted('@FirstPrice', '@LastPrice', 'desc')
  })

  it('Filter by platforms', () => {
    cy.selectFilterAndCheckUrl('checkbox', 'linux', 'platforms=linux')
    cy.selectFilterAndCheckUrl('checkbox', 'mac', 'platforms=linux%2Cmac')
    cy.selectFilterAndCheckUrl('checkbox', 'windows', 'platforms=linux%2Cmac%2Cwindows')
  })

  it('Filter by categories', () => {
    cy.selectFilterAndCheckUrl('checkbox', `Action`, 'categories=action')
    cy.selectFilterAndCheckUrl('checkbox', `Adventure`, 'categories=action%2Cadventure')
  })

  it('Filter with empty products', () => {
    cy.findByRole('checkbox', { name: `Naval` }).click()
    cy.findByText('No results found').should('be.visible')
    cy.get('@FilteredProducts').should('have.length', 0)
  })

  it('Add and remove products from cart', () => {
    cy.checkCartItemsAndClose({ quantity: 0 })
    cy.get('button[title="Add to cart"]').eq(0).click()
    cy.get('button[title="Add to cart"]').eq(1).click()

    cy.checkCartItemsAndClose({ quantity: 2 })

    cy.get('button[title="Remove from cart"]').eq(0).click({ force: true })
    cy.checkCartItemsAndClose({ quantity: 1 })

    cy.get('button[title="Remove from cart"]').eq(0).click({ force: true })
    cy.checkCartItemsAndClose({ quantity: 0 })
  })
})
