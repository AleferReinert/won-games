/// <reference types="cypress" />

describe('Product page (unauthenticated)', () => {
  it('Cover, title, short description, price, add to cart button, gallery, description, categories, platforms, release date, developer, publisher, rating, coming soon and recommended products', () => {
    cy.visit('/product/anno-1404')

    cy.findByRole('img', { name: 'Anno 1404' })

    cy.findByTestId('ProductHeaderComponent').within(() => {
      cy.findByRole('heading', { level: 1 }).should('have.text', 'Anno 1404')
      cy.findByRole('paragraph').should(
        'contain.text',
        'Anno 1404 and its add-on are an award winning combination of construction'
      )
      cy.findByLabelText('Price').should('have.text', '$108.00')
      cy.findByRole('button', { name: 'Add to cart' }).should('be.visible')
    })

    cy.findByTestId('GalleryComponent').within(() => {
      cy.findAllByRole('button', { name: 'Thumb' }).eq(0).as('Thumb1')
      cy.findByLabelText('modal').as('Modal')

      cy.get('@Modal').should('not.be.visible')
      cy.get('@Thumb1').click()
      cy.get('@Modal').should('be.visible')
      cy.findByRole('button', { name: 'Close modal' }).click()
      cy.get('@Modal').should('not.be.visible')
    })

    cy.findByTestId('description').should('contain.text', 'Create your own nation with a unique blend')

    cy.findByTestId('ProductDetailsComponent').within(() => {
      cy.findByText('(mac, windows)').should('be.visible')
      cy.findByText('Dec 8, 2010').should('be.visible')
      cy.findByText('Blue Byte, Related Designs').should('be.visible')
      cy.findByText('Ubisoft').should('be.visible')
      cy.findByText('12+').should('be.visible')
      cy.findByText('Historical, Simulation, Strategy').should('be.visible')
    })

    cy.get('[data-cy="comingSoon"]').within(() => {
      cy.findByRole('heading', { level: 2 }).should('be.visible')
      cy.findByTestId('HighlightComponent').should('be.visible')
      cy.findByTestId('ProductSliderComponent').should('be.visible')
    })

    cy.get('[data-cy="recommendedProducts"]').within(() => {
      cy.findByRole('heading', { level: 2 }).should('be.visible')
      cy.findByTestId('ProductSliderComponent').should('be.visible')
    })
  })
})
