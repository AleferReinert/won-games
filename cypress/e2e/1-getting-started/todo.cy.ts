/// <reference types="cypress" />

describe('My First Test', () => {
  it.skip('visits the google page', () => {
    cy.google()
  })
  it('Change theme portfólio alefer', () => {
    cy.visit('aleferreinert.vercel.app')
  })
})
