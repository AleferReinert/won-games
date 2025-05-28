/// <reference types="cypress" />

describe('Product page (unauthenticated)', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.findAllByTestId('ProductComponent').eq(0).click()
    cy.findByTestId('ProductPage', { timeout: 30000 }).should('be.visible')
  })

  it('Cover, title, short description, price, add to cart button, gallery, description, categories, platforms, release date, developer, publisher, rating, coming soon and recommended products', () => {
    cy.findByTestId('cover').find('img').should('be.visible')

    cy.findByLabelText('Cart items').as('CartItemsCount')
    cy.findByTestId('ProductHeaderComponent').within(() => {
      cy.findByRole('heading', { level: 1 }).should('be.visible')
      cy.findByRole('paragraph').should('be.visible')
      cy.findAllByLabelText('Price').filter(':visible').should('have.length', 1)
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

    cy.findByTestId('description').should('be.visible')

    cy.findByTestId('ProductDetailsComponent').within(() => {
      // cy.findByText('(mac, windows)').should('be.visible')
      // cy.findByText('May 7, 2025').should('be.visible')
      // cy.findByText('Blue Byte, Related Designs').should('be.visible')
      // cy.findByText('Ubisoft').should('be.visible')
      // cy.findByText('12+').should('be.visible')
      // cy.findByText('Historical, Simulation, Strategy').should('be.visible')
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
    cy.get('@CartItemsComponent').findByTestId('CartItemComponent').should('be.visible')
    cy.get('@CartItemsComponent').findByLabelText('total price').should('contain.text', '$')

    // Close dropdown on click outside
    cy.findByTestId('DropdownOverlay').click()

    // Remove from cart
    cy.findByTestId('ProductHeaderComponent').findByRole('button', { name: 'Remove from cart' }).click()

    // Update badge
    cy.get('@CartItemsBadge').should('have.text', '0')

    // Dropdown should be empty
    cy.get('@ShoppingCartButton').click()
    cy.findByText('Your cart is empty').should('be.visible')
  })

  it('Add and remove products from cart', () => {
    cy.addAndRemoveProductsFromCart()
  })

  it('Sign in, add and remove products from wishlist', () => {
    cy.goToSignInPageAndLogin('johndoe@example.com', '123456')
    cy.addAndRemoveProductsFromWishlist()
  })
})
