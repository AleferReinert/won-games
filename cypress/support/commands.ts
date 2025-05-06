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

Cypress.Commands.add('isPriceSorted', (firstPriceAlias, lastPriceAlias, order: 'asc' | 'desc') => {
  cy.getPriceValue(firstPriceAlias).then((firstPrice) => {
    const parsedFirstPrice = firstPrice === 'Free' ? 0 : Number(firstPrice)

    cy.getPriceValue(lastPriceAlias).then((lastPrice) => {
      const parsedLastPrice = lastPrice === 'Free' ? 0 : Number(lastPrice)

      if (order === 'asc') {
        expect(parsedLastPrice).to.be.greaterThan(parsedFirstPrice)
      } else {
        expect(parsedLastPrice).to.be.lessThan(parsedFirstPrice)
      }
    })
  })
})

Cypress.Commands.add('isUserLoggedInAndRedirect', (email) => {
  cy.url({ timeout: 10000 }).should('eq', Cypress.config().baseUrl + '/')
  cy.findByRole('button', { name: 'My account' }).findByText(email).should('be.visible')
})

Cypress.Commands.add('isUserLoggedOutAndRedirect', () => {
  cy.url({ timeout: 10000 }).should('eq', Cypress.config().baseUrl + '/')
  cy.findByRole('link', { name: 'Sign in' }).should('be.visible')
})

Cypress.Commands.add('signIn', (email = 'johndoe@example.com', password = '123456') => {
  cy.findByLabelText('E-mail').type(email)
  cy.findByLabelText('Password').type(password)
  cy.findByRole('button', { name: 'Sign in' }).click()
})

Cypress.Commands.add('protectedRoute', (url: string) => {
  cy.visit(url)
  cy.url({ timeout: 10000 }).should('include', '/sign-in')
  cy.signIn('johndoe@example.com', '123456')
  cy.url({ timeout: 10000 }).should('include', url)
})

Cypress.Commands.add('addToCartFromShowcase', ({ quantity }) => {
  cy.get('[data-testid="ShowcaseComponent"] button[title="Add to cart"]').as('AddToCartButtons')
  for (let i = 0; i < quantity; i++) {
    cy.get('@AddToCartButtons').eq(0).should('not.be.disabled').click()
  }
})

Cypress.Commands.add('removeFromCartFromShowcase', ({ quantity }) => {
  cy.get('[data-testid="ShowcaseComponent"] button[title="Remove from cart"]').as('RemoveFromCartButtons')
  for (let i = 0; i < quantity; i++) {
    cy.get('@RemoveFromCartButtons').eq(0).should('not.be.disabled').click()
  }
})

Cypress.Commands.add('checkCartItemsAndClose', ({ quantity }) => {
  cy.findByTestId('CartDropdownComponent').within(() => {
    cy.findByRole('button', { name: 'Shopping cart' }).as('DropdownButton')
    cy.findByLabelText('Cart items').as('Badge')
    cy.get('@Badge').should('have.text', quantity)
    cy.get('@DropdownButton').click()
    cy.findAllByTestId('CartItemComponent').should('have.length', quantity)

    if (quantity === 0) {
      cy.findByText('Your cart is empty').should('be.visible')
    }

    cy.get('@DropdownButton').click()
  })
})

Cypress.Commands.add('addAndRemoveProductsFromCart', () => {
  cy.checkCartItemsAndClose({ quantity: 0 })

  cy.addToCartFromShowcase({ quantity: 2 })
  cy.checkCartItemsAndClose({ quantity: 2 })

  cy.removeFromCartFromShowcase({ quantity: 1 })
  cy.checkCartItemsAndClose({ quantity: 1 })

  cy.removeFromCartFromShowcase({ quantity: 1 })
  cy.checkCartItemsAndClose({ quantity: 0 })
})

Cypress.Commands.add('selectFilterAndCheckUrl', (role, name, urlParam) => {
  cy.findByRole(role, { name }).click()
  cy.url().should('include', urlParam)
})

Cypress.Commands.add('addToWishlistFromShowcase', ({ quantity }) => {
  cy.get('[data-testid="ShowcaseComponent"] button[title="Add to wishlist"]').as('AddToWishlistButtons')
  for (let i = 0; i < quantity; i++) {
    cy.get('@AddToWishlistButtons').eq(0).should('not.be.disabled').click()
  }
})

Cypress.Commands.add('removeFromWishlistFromShowcase', ({ quantity }) => {
  cy.get('[data-testid="ShowcaseComponent"] button[title="Remove from wishlist"]').as('RemoveFromWishlistButtons')
  for (let i = 0; i < quantity; i++) {
    cy.get('@RemoveFromWishlistButtons').eq(0).should('not.be.disabled').click()
  }
})

Cypress.Commands.add('checkWishlistItemsAndClose', ({ quantity }) => {
  cy.findByTestId('UserDropdownComponent').within(() => {
    cy.findByRole('button', { name: 'My account' }).as('DropdownButton')
    cy.get('@DropdownButton').click()
    cy.contains(`Wishlist (${quantity})`).should('be.visible')
    cy.get('@DropdownButton').click()
  })
})

Cypress.Commands.add('goToSignInPageAndLogin', (email, password) => {
  cy.findAllByRole('link', { name: 'Sign in' }).first().click()
  cy.signIn(email, password)
})

Cypress.Commands.add('clearWishlist', () => {
  cy.get('body')
    .wait(2000)
    .then(($body) => {
      const buttonsSelector = '[data-testid="ShowcaseComponent"] button[title="Remove from wishlist"]'
      const wishlistItemsAdded = $body.find(buttonsSelector).length

      if (wishlistItemsAdded > 0) {
        cy.get(buttonsSelector).then((button) => {
          for (let i = 0; i < wishlistItemsAdded; i++) {
            cy.wait(500).wrap(button).eq(i).click()
          }
        })
      }
    })
})

Cypress.Commands.add('addAndRemoveProductsFromWishlist', () => {
  cy.clearWishlist()
  cy.checkWishlistItemsAndClose({ quantity: 0 })

  cy.addToWishlistFromShowcase({ quantity: 2 })
  cy.checkWishlistItemsAndClose({ quantity: 2 })

  cy.removeFromWishlistFromShowcase({ quantity: 1 })
  cy.checkWishlistItemsAndClose({ quantity: 1 })

  cy.removeFromWishlistFromShowcase({ quantity: 1 })
  cy.checkWishlistItemsAndClose({ quantity: 0 })
})

Cypress.Commands.add('signUp', (fullName, email, password, confirmPassword) => {
  cy.findByLabelText('Full name').type(fullName)
  cy.findByLabelText('E-mail').type(email)
  cy.findByLabelText('Password').type(password)
  cy.findByLabelText('Confirm password').type(confirmPassword ? confirmPassword : password)
  cy.findByRole('button', { name: 'Sign up' }).click()
})
