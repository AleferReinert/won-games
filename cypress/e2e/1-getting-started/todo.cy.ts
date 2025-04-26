/// <reference types="cypress" />

describe('My First Test', () => {
  it('visits the google page', () => {
    cy.google()
  })
  it('Change theme portfólio alefer', () => {
    cy.visit('aleferreinrt.vercel.app')
  })
})
