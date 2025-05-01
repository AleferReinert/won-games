/// <reference types="cypress" />
import { fakeEmail } from '../support/generateFakeData'

describe('Forgot password', () => {
  beforeEach(() => {
    cy.visit('/forgot-password')
    cy.findByLabelText('E-mail').as('EmailInput')
    cy.findByRole('button', { name: 'Send e-mail' }).as('SendEmailButton')
  })

  it('Show error when invalid e-mail', () => {
    cy.get('@EmailInput').type('invalid@email')
    cy.get('@SendEmailButton').click()
    cy.findByText('Invalid e-mail').should('be.visible')
  })

  it('Valid form', () => {
    cy.intercept('POST', '/api/auth/forgot-password', (req) => {
      req.reply({ statusCode: 200, body: { ok: true } })
      expect(req.body.email).to.equal(fakeEmail)
    })
    cy.get('@EmailInput').type(fakeEmail)
    cy.get('@SendEmailButton').click()
    cy.findByText(`Check your inbox! We've sent you a reset link.`).should('be.visible')
  })
})
