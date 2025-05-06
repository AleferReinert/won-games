/// <reference types="cypress" />

import { fakeUser } from '../support/generateFakeData'

describe('Full purchase of free product', () => {
  it('Sign up, explore, ', () => {
    cy.visit('/')

    // Go to sign up and check login after sign up
    cy.findByRole('link', { name: 'Sign in' }).click()
    cy.findByRole('link', { name: 'Sign up' }).click()
    cy.signUp(fakeUser.fullName, fakeUser.email, fakeUser.password)
    cy.isUserLoggedInAndRedirect(fakeUser.fullName.split(' ')[0])

    // Go to explore and select free
    cy.findByRole('link', { name: 'Explore' }).click()
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
})
