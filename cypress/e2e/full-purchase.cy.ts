/// <reference types="cypress" />

import { fakeUser } from '../support/generateFakeData'

describe('Full purchase', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Sign up and buy a free product', () => {
    // Go to sign up and check login after sign up
    cy.findByRole('link', { name: 'Sign in' }).click()
    cy.url({ timeout: 20000 }).should('include', '/sign-in')
    cy.findByRole('link', { name: 'Sign up' }).click()
    cy.url({ timeout: 20000 }).should('include', '/sign-up')
    cy.signUp(fakeUser.fullName, fakeUser.email, fakeUser.password)

    // Confirm email and sign in
    cy.confirmEmail(fakeUser.email)
    cy.findByRole('link', { name: 'Sign in' }).click()
    cy.signIn(fakeUser.email, fakeUser.password)
    cy.isUserLoggedInAndRedirect(fakeUser.fullName.split(' ')[0])

    // Go to explore and select free
    cy.findByRole('banner').findByRole('link', { name: 'Explore' }).click()
    cy.get('#free', { timeout: 30000 }).click()
    cy.url({ timeout: 30000 }).should('include', 'price=0')
    cy.wait(2000)

    // Add to cart
    cy.findAllByRole('button', { name: 'Add to cart' }).eq(0).click()
    cy.checkCartItemsAndClose({ quantity: 1 })

    // Open dropdown and go to cart
    cy.findByRole('button', { name: 'Shopping cart' }).click()
    cy.findByRole('link', { name: 'Buy it now' }).click()
    cy.url({ timeout: 30000 }).should('include', '/cart')

    // Check if product has add and free informations
    cy.get('main').findByTestId('CartItemComponent').should('have.length', '1')
    cy.get('main').findByLabelText('total price').should('have.text', 'Free')
    cy.findByText('No payment required.').should('be.visible')

    // Buy free and success page
    cy.findByRole('button', { name: 'Get for free' }).click()
    cy.url({ timeout: 30000 }).should('include', '/success')
    cy.findByText('Your purchase was successful!').should('be.visible')

    // Go to my orders
    cy.findByRole('link', { name: 'here' }).click()
    cy.url({ timeout: 30000 }).should('include', '/account/orders')

    // Check if product has add and free informations
    cy.get('main').findByTestId('CartItemComponent').as('CartItemComponent')
    cy.get('@CartItemComponent').should('have.length', '1')
    cy.get('@CartItemComponent').findByLabelText('Price').should('have.text', 'Free')
    cy.get('@CartItemComponent').findAllByText('Free').eq(1).should('be.visible')
  })

  it('Sign up and buy paid products', () => {
    cy.purchasePaidProducts()

    // My orders - Check products and payment details
    cy.findByRole('link', { name: 'here' }).click()
    cy.url({ timeout: 30000 }).should('include', '/account/orders')
    cy.get('main').findAllByTestId('CartItemComponent').as('CartListProducts')
    cy.get('@CartListProducts').eq(0).as('FirstProduct')
    cy.get('@CartListProducts').eq(1).as('SecondProduct')

    cy.get('@CartListProducts').should('have.length', '2')

    // At least 1 product should be paid
    cy.get('@CartListProducts').contains('$').should('have.length', '1')
    cy.get('@CartListProducts').findByText('**** **** **** 4242').should('have.length', '1')
    cy.get('@CartListProducts').findAllByRole('img', { name: 'visa' }).should('have.length', '1')
  })
})
