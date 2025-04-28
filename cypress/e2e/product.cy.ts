/// <reference types="cypress" />
const shortDescription =
  'Anno 1404 and its add-on are an award winning combination of construction, economy, discovery, diplomacy & combat.'

describe('Product page (unauthenticated)', () => {
  it('Cover, title, short description, price and add to cart button', () => {
    cy.visit('/product/anno-1404')

    cy.findByRole('img', { name: 'Anno 1404' })

    cy.findByTestId('ProductHeaderComponent').within(() => {
      cy.findByRole('heading', { level: 1 }).should('have.text', 'Anno 1404')
      cy.findByRole('paragraph').should('contain.text', shortDescription)
      cy.findByLabelText('Price').should('have.text', '$108.00')
      cy.findByRole('button', { name: 'Add to cart' }).should('be.visible')
    })
  })
})
