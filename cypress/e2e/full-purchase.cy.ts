/// <reference types="cypress" />

import { fakeUser, secondFakeUser } from '../support/generateFakeData'

describe('Full purchase', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Sign up and buy a free product', () => {
    // Go to sign up and check login after sign up
    cy.findByRole('link', { name: 'Sign in' }).click()
    cy.findByRole('link', { name: 'Sign up' }).click()
    cy.signUp(fakeUser.fullName, fakeUser.email, fakeUser.password)
    cy.isUserLoggedInAndRedirect(fakeUser.fullName.split(' ')[0])

    // Go to explore and select free
    cy.findByRole('banner').findByRole('link', { name: 'Explore' }).click()
    cy.findByLabelText('Free').click()
    cy.url().should('include', 'price=0')
    cy.wait(2000)

    // Add to cart
    cy.findAllByRole('button', { name: 'Add to cart' }).eq(0).click()
    cy.checkCartItemsAndClose({ quantity: 1 })

    // Open dropdown and go to checkout
    cy.findByRole('button', { name: 'Shopping cart' }).click()
    cy.findByRole('link', { name: 'Buy it now' }).click()

    // Check if product has add and free informations
    cy.get('main').findByTestId('CartItemComponent').should('have.length', '1')
    cy.get('main').findByLabelText('total price').should('have.text', 'Free')
    cy.findByText('No payment required.').should('be.visible')

    // Buy free and success page
    cy.findByRole('button', { name: 'Get for free' }).click()
    cy.findByText('Your purchase was successful!').should('be.visible')

    // Check product in my orders
    cy.findByRole('link', { name: 'here' }).click()
    cy.get('main').findByTestId('CartItemComponent').as('CartItemComponent')
    cy.get('@CartItemComponent').should('have.length', '1')
    cy.findByLabelText('Price').should('have.text', 'Free')
    cy.get('@CartItemComponent').findAllByText('Free').eq(1).should('be.visible')
  })

  it('Sign up and buy paid products', () => {
    // Go to sign up and check login after sign up
    cy.findByRole('link', { name: 'Sign in' }).click()
    cy.findByRole('link', { name: 'Sign up' }).click()
    cy.signUp(secondFakeUser.fullName, secondFakeUser.email, secondFakeUser.password)
    cy.isUserLoggedInAndRedirect(secondFakeUser.fullName.split(' ')[0])

    // Go to explore and select high to low
    cy.findByRole('banner').findByRole('link', { name: 'Explore' }).click()
    cy.findByLabelText('High to low').click()
    cy.url().should('include', 'sort=price%3Adesc')
    cy.wait(2000)

    // Add to cart
    cy.findAllByRole('button', { name: 'Add to cart' }).eq(0).click()
    cy.findAllByRole('button', { name: 'Add to cart' }).eq(1).click()
    cy.checkCartItemsAndClose({ quantity: 2 })

    // Open dropdown and go to checkout
    cy.findByRole('button', { name: 'Shopping cart' }).click()
    cy.findByRole('link', { name: 'Buy it now' }).click()

    // // Check if products has add
    cy.get('main').findAllByTestId('CartItemComponent').should('have.length', '2')
    cy.get('main').findByLabelText('total price').should('contain.text', '$')

    // // Buy and success page
    cy.findByRole('button', { name: 'Buy now' }).should('be.disabled')
    cy.fillElementsInput('cardNumber', '4242424242424242')
    cy.fillElementsInput('cardExpiry', '1075')
    cy.fillElementsInput('cardCvc', '123')
    cy.findByRole('button', { name: 'Buy now' }).click()
    cy.findByText('Your purchase was successful!', { timeout: 10000 }).should('be.visible')

    // My orders - Check products and payment details
    cy.findByRole('link', { name: 'here' }).click()
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
