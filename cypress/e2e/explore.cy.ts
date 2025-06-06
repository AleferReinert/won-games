/// <reference types="cypress" />

describe('Products page', () => {
  beforeEach(() => {
    cy.visit('/explore')
    cy.get('[data-cy="products"]').findAllByTestId('ProductComponent').as('FilteredProducts')
  })

  it('If there are more than 9 products, loads 9 products and loads more on button click', () => {
    cy.get('@FilteredProducts').then(($products) => {
      if ($products.length > 9) {
        cy.get('@FilteredProducts').should('have.length', 9)
        cy.findByRole('button', { name: /show more/i }).click()
        cy.get('@FilteredProducts').should('have.length.gt', 9)
      }
    })
  })

  it('Filter by price', () => {
    cy.selectFilterAndCheckUrl('radio', 'Free', 'price=0')
    cy.wait(2000)
    cy.get('[data-cy="products"]')
      .findAllByTestId('ProductComponent')
      .findAllByLabelText('Price')
      .each(($price) => {
        expect($price.text()).to.equal('Free')
      })
    cy.filterUnderPrice(50)
    cy.filterUnderPrice(100)
    cy.filterUnderPrice(150)
    cy.filterUnderPrice(200)
  })

  it.only('Filter by sort', () => {
    cy.get('@FilteredProducts').findAllByLabelText('Price').as('Prices')

    cy.selectFilterAndCheckUrl('radio', 'Low to high', 'sort=price%3Aasc')
    cy.wait(2000)
    cy.get('@Prices').first().as('FirstPrice')
    cy.get('@Prices').last().as('LastPrice')
    cy.get('@LastPrice').then(($el) => {
      cy.log($el.text()) // Loga o texto do elemento
    })
    // cy.isPriceSorted('@FirstPrice', '@LastPrice', 'asc')

    // cy.selectFilterAndCheckUrl('radio', 'High to low', 'sort=price%3Adesc')
    // cy.wait(2000)
    // cy.isPriceSorted('@FirstPrice', '@LastPrice', 'desc')
  })

  it('Filter by platforms', () => {
    cy.selectFilterAndCheckUrl('checkbox', 'Linux', 'platforms=linux')
    cy.selectFilterAndCheckUrl('checkbox', 'Mac', 'platforms=linux%2Cmac')
    cy.selectFilterAndCheckUrl('checkbox', 'Windows 7', 'platforms=linux%2Cmac%2Cwindows-7')
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
