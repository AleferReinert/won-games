declare namespace Cypress {
  interface Chainable {
    /** Switch between slides and verify banner visibility */
    toggleBanner(): Chainable<void>

    /**
     * Filter options: Price.
     *
     * Example:
     * ```ts
     * cy.filterUnderPrice(100)
     * ```
     * - Verify URL changes
     * - Verify products with prices below 100
     */
    filterUnderPrice(price: number): Chainable<void>

    /**
     * Extract numeric price from element.
     *
     * Example:
     * ```ts
     * cy.getPriceValueAsNumber('@FirstPrice')
     * ```
     */
    getPriceValue(alias: string): Chainable<string | number>

    /**
     * Compare prices and return true if they are in ascending order.
     *
     * Example:
     * ```ts
     * cy.isPriceAscending('@FirstPrice', '@LastPrice')
     * ```
     */
    isPriceAscending(firstPriceAlias: string, lastPriceAlias: string): Chainable<boolean>

    /**
     * Compare prices and return true if they are in descending order.
     *
     * Example:
     * ```ts
     * cy.isPriceDescending('@FirstPrice', '@LastPrice')
     * ```
     */
    isPriceDescending(firstPriceAlias: string, lastPriceAlias: string): Chainable<boolean>

    /**
     * Check if user is logged in and redirect to home.
     *
     * Example:
     * ```ts
     * cy.isUserLoggedIn('John Doe')
     * ```
     */
    isUserLoggedInAndRedirect(fullname: string): Chainable<void>

    /**
     * Type e-mail, password and sign in.
     *
     * Example:
     * ```ts
     * cy.signIn('John Doe', '123456')
     * ```
     */
    signIn(email: string, password: string): Chainable<void>
  }
}
