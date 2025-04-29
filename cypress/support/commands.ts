/// <reference types="@testing-library/cypress" />
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

Cypress.Commands.add('filterUnderPrice', (price) => {
  cy.findByRole('radio', { name: `Under $${price}` }).click()
  cy.url().should('include', `price=${price}`)
  cy.wait(500)
  cy.get('@FilteredProducts')
    .findAllByLabelText('Price')
    .each(($price) => {
      const priceText = $price.text()
      const priceNumber = Number(priceText.replace('$', ''))
      expect(priceNumber).to.be.lessThan(price)
    })
})

Cypress.Commands.add('getPriceValue', (priceAlias) => {
  cy.get(priceAlias)
    .invoke('text')
    .then((text) => text.replace('$', ''))
})

Cypress.Commands.add('isPriceAscending', (firstPriceAlias, lastPriceAlias) => {
  cy.getPriceValue(firstPriceAlias).then((firstPrice) => {
    let parsedFirstPrice: number

    if (firstPrice === 'Free') {
      parsedFirstPrice = 0
    } else {
      parsedFirstPrice = Number(firstPrice)
    }

    cy.getPriceValue(lastPriceAlias).then((lastPrice) => {
      let parsedLastPrice: number
      if (lastPrice === 'Free') {
        parsedLastPrice = 0
      } else {
        parsedLastPrice = Number(lastPrice)
      }
      expect(parsedLastPrice).to.be.greaterThan(parsedFirstPrice)
    })
  })
})

Cypress.Commands.add('isPriceDescending', (firstPriceAlias, lastPriceAlias) => {
  cy.getPriceValue(firstPriceAlias).then((firstPrice) => {
    let parsedFirstPrice: number
    if (firstPrice === 'Free') {
      parsedFirstPrice = 0
    } else {
      parsedFirstPrice = Number(firstPrice)
    }

    cy.getPriceValue(lastPriceAlias).then((lastPrice) => {
      let parsedLastPrice: number
      if (lastPrice === 'Free') {
        parsedLastPrice = 0
      } else {
        parsedLastPrice = Number(lastPrice)
      }
      expect(parsedLastPrice).to.be.lessThan(parsedFirstPrice)
    })
  })
})
