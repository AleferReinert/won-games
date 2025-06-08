/// <reference types="cypress" />

describe('Success Page', () => {
  it('Not visible without recent purchase', () => {
    cy.visit('/success')
    cy.findByTestId('LoadingComponent').should('be.visible')
    cy.findByText('Your purchase was successful!').should('not.exist')
    cy.url({ timeout: 30000 }).should('not.include', '/success')
  })

  it('Visible after purchase, not visible on refresh', () => {
    cy.purchasePaidProducts()

    // Refresh success page
    cy.reload()
    cy.findByTestId('LoadingComponent').should('be.visible')
    cy.findByText('Your purchase was successful!').should('not.exist')
    cy.url({ timeout: 30000 }).should('not.include', '/success')
  })
})
