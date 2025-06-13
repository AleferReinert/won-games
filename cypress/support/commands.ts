/// <reference types="@testing-library/cypress" />
/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'
import 'cypress-maildev'
import 'cypress-plugin-stripe-elements'
import { secondFakeUser } from './generateFakeData'

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
  cy.wait(2000)
  cy.get('@FilteredProducts')
    .findAllByLabelText('Price')
    .each(($price) => {
      const priceText = $price.text()
      const priceNumber = priceText === 'Free' ? 0 : Number(priceText.replace('$', ''))
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

Cypress.Commands.add('isUserLoggedInAndRedirect', (firstName) => {
  cy.url({ timeout: 10000 }).should('eq', Cypress.config().baseUrl + '/')
  cy.findByRole('button', { name: 'My account' }).findByText(firstName).should('be.visible')
})

Cypress.Commands.add('isUserLoggedOutAndRedirect', () => {
  cy.url({ timeout: 10000 }).should('not.include', '/sign-in')
  cy.findByRole('link', { name: 'Sign in' }).should('be.visible')
})

Cypress.Commands.add('signIn', (email = 'johndoe@example.com', password = '123456') => {
  cy.findByLabelText('E-mail').type(email.toLowerCase())
  cy.findByLabelText('Password').type(password)
  cy.findByRole('button', { name: 'Sign in' }).click()
  cy.url({ timeout: 30000 }).should('not.include', '/sign-in')
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
    cy.findByLabelText('Cart items').should('have.text', quantity)
    cy.get('@DropdownButton').click()
    cy.findAllByTestId('CartItemComponent').should('have.length', quantity)

    if (quantity === 0) {
      cy.findByText('Your cart is empty', { timeout: 30000 }).should('be.visible')
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
  cy.url({ timeout: 10000 }).should('include', '/sign-in')
  cy.signIn(email, password)
})

Cypress.Commands.add('clearWishlist', (callbackUrl) => {
  cy.visit('/wishlist')
  cy.url({ timeout: 30000 }).should('include', '/wishlist')

  cy.wait(10000)
  cy.get('body').then(($body) => {
    const clearBtn = $body.find('[data-testid="ClearWishlistButton"]')
    if (clearBtn.length > 0) {
      cy.wrap(clearBtn).click()
    }
  })
  cy.visit(callbackUrl)
})

Cypress.Commands.add('addAndRemoveProductsFromWishlist', () => {
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
  cy.findByLabelText('E-mail').type(email.toLowerCase())
  cy.findByLabelText('Password').type(password)
  cy.findByLabelText('Confirm password').type(confirmPassword ? confirmPassword : password)
  cy.findByRole('button', { name: 'Sign up' }).click()
})

Cypress.Commands.add('confirmEmail', (email) => {
  cy.wait(10000)
  cy.maildevGetLastMessage().then((response) => {
    expect(response.to[0].address).to.equal(email.toLowerCase())
    cy.document().invoke('write', response.html)
    cy.get('a')
      .contains('Confirm e-mail')
      .invoke('attr', 'href')
      .then((href) => href && cy.visit(href))
  })
  cy.url().should('include', '/email-confirmed')
  cy.findByRole('heading', { name: "Thank's for register" }).should('be.visible')
  cy.findByText('Your e-mail has been confirmed.').should('be.visible')
})

Cypress.Commands.add('purchasePaidProducts', () => {
  cy.visit('/sign-up')
  cy.signUp(secondFakeUser.fullName, secondFakeUser.email, secondFakeUser.password)

  // Confirm email and sign in
  cy.confirmEmail(secondFakeUser.email.toLowerCase())
  cy.findByRole('link', { name: 'Sign in' }).click()
  cy.log(`Logging in with: ${secondFakeUser.email.toLowerCase()} / ${secondFakeUser.password}`)
  cy.signIn(secondFakeUser.email, secondFakeUser.password)
  cy.isUserLoggedInAndRedirect(secondFakeUser.fullName.split(' ')[0])

  // Go to explore and select high to low
  cy.findByRole('banner').findByRole('link', { name: 'Explore' }).click()
  cy.get('#high-to-low', { timeout: 30000 }).click()
  cy.url({ timeout: 30000 }).should('include', 'sort=price%3Adesc')
  cy.wait(2000)

  // Add products to cart
  cy.findAllByRole('button', { name: 'Add to cart' }).eq(0).click()
  cy.findAllByRole('button', { name: 'Add to cart' }).eq(1).click()
  cy.checkCartItemsAndClose({ quantity: 2 })

  // Open dropdown and go to cart
  cy.findByRole('button', { name: 'Shopping cart' }).click()
  cy.findByRole('link', { name: 'Buy it now' }).click()
  cy.url({ timeout: 30000 }).should('include', '/cart')

  // Check if products has add
  cy.get('main').findAllByTestId('CartItemComponent').should('have.length', '2')
  cy.get('main').findByLabelText('total price').should('contain.text', '$')

  // Type card infos
  cy.findByRole('button', { name: 'Buy now' }).should('be.disabled')
  cy.fillElementsInput('cardNumber', '4242424242424242')
  cy.fillElementsInput('cardExpiry', '1075')
  cy.fillElementsInput('cardCvc', '123')
  cy.findByRole('button', { name: 'Buy now' }).click()

  // Success page
  cy.url({ timeout: 30000 }).should('include', '/success')
  cy.findByText('Your purchase was successful!', { timeout: 10000 }).should('be.visible')
})
