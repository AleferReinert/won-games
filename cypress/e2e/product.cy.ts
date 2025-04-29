/// <reference types="cypress" />

describe('Product page (unauthenticated)', () => {
  beforeEach(() => cy.visit('/product/anno-1404'))

  it('Cover, title, short description, price, add to cart button, gallery, description, categories, platforms, release date, developer, publisher, rating, coming soon and recommended products', () => {
    cy.findByRole('img', { name: 'Anno 1404' })

    cy.findByLabelText('Cart items').as('CartItemsCount')
    cy.findByTestId('ProductHeaderComponent').within(() => {
      cy.findByRole('heading', { level: 1 }).should('have.text', 'Anno 1404')
      cy.findByRole('paragraph').should('contain.text', 'Anno 1404 and its add-on are an award winning combination')
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

  it('Add to cart/remove from cart', () => {
    cy.findByLabelText('Cart items').as('CartItemsBadge')
    cy.findByTestId('ProductHeaderComponent').findByRole('button', { name: 'Add to cart' }).as('AddToCartButton')
    cy.findByRole('button', { name: 'Shopping cart' }).as('ShoppingCartButton')
    cy.findByTestId('CartItemsComponent').as('CartItemsComponent')

    // Empty badge on header
    cy.get('@CartItemsBadge').should('have.text', '0')

    // Add to cart
    cy.get('@AddToCartButton').click()

    // Update badge
    cy.get('@CartItemsBadge').should('have.text', '1')

    // Open dropdown with product and total price
    cy.get('@ShoppingCartButton').click()
    cy.get('@CartItemsComponent').should('be.visible')
    cy.get('@CartItemsComponent').findByText('Anno 1404').should('be.visible')
    cy.get('@CartItemsComponent').findByLabelText('total price').should('have.text', '$108.00')

    // Close dropdown on click outside
    cy.findByTestId('DropdownOverlay').click()

    // Remove from cart
    cy.findByRole('button', { name: 'Remove from cart' }).click()

    // Update badge
    cy.get('@CartItemsBadge').should('have.text', '0')

    // Dropdown should be empty
    cy.get('@ShoppingCartButton').click()
    cy.findByText('Your cart is empty').should('be.visible')
  })
})
