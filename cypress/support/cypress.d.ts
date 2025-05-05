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
     * Check if prices are sorted.
     *
     * Example:
     * ```ts
     * cy.isPriceSorted('@FirstPrice', '@LastPrice', 'asc')
     * ```
     */
    isPriceSorted(firstPriceAlias: string, lastPriceAlias: string, order: 'asc' | 'desc'): Chainable<boolean>

    /**
     * Check if user is logged in and redirect to home.
     *
     * Example:
     * ```ts
     * cy.isUserLoggedInAndRedirect('John Doe')
     * ```
     */
    isUserLoggedInAndRedirect(fullname: string): Chainable<void>

    /**
     * Check if user is logged out and redirect to home.
     */
    isUserLoggedOutAndRedirect(): Chainable<void>

    /**
     * Type e-mail, password and sign in.
     *
     * Example:
     * ```ts
     * cy.signIn('John Doe', '123456')
     * ```
     */
    signIn(email: string, password: string): Chainable<void>

    /**
     * 1. Click on 'Sign in' button
     * 2. Type e-mail, password and sign in.
     *
     * Example:
     * ```ts
     * cy.goToSignInPageAndLogin('John Doe', '123456')
     * ```
     */
    goToSignInPageAndLogin(email: string, password: string): Chainable<void>

    /** Try to access a protected route when unauthenticated:
     * 1. Redirect to sign-in page
     * 2. Sign in
     * 3. Redirect to same protected route
     *
     * Example:
     * ```ts
     * cy.protectedRoute('/my-private-page')
     * ```
     */
    protectedRoute(url: string): Chainable<void>

    /** Select first ocurrences of 'Add to cart' button and click
     * Example:
     * ```ts
     * cy.addToCartFromShowcase({ quantity: 5 })
     * ```
     */
    addToCartFromShowcase({ quantity: number }): Chainable<void>

    /** Select first ocurrences of 'Remove from cart' button and click
     * Example:
     * ```ts
     * cy.removeFromCartFromShowcase({ quantity: 5 })
     * ```
     */
    removeFromCartFromShowcase({ quantity: number }): Chainable<void>

    /** 1. Check quantity on badge
     * 	2. Open cart dropdown
     *	2. Check quantity of products
     *  3. Check empty message when quantity is 0
     *  4. Close cart dropdown
     * Example:
     * ```ts
     * cy.checkCartItemsAndClose({ quantity: 5 })
     * ```
     */
    checkCartItemsAndClose({ quantity: number }): Chainable<void>

    /** 1. Add products (from showcase) to cart
     *  2. Remove products from cart
     *
     */
    addAndRemoveProductsFromCart(): Chainable<void>

    /** 1. Select an option from filter
     *  2. Check if URL changes
     */
    selectFilterAndCheckUrl(role: string, name: string, urlParam: string): Chainable<void>

    /** Select first ocurrences of 'Add to wishlist' button and click
     * Example:
     * ```ts
     * cy.addToWishlistFromShowcase({ quantity: 5 })
     * ```
     */
    addToWishlistFromShowcase({ quantity: number }): Chainable<void>

    /** Select first ocurrences of 'Remove from wishlist' button and click
     * Example:
     * ```ts
     * cy.removeFromWishlistFromShowcase({ quantity: 5 })
     * ```
     */
    removeFromWishlistFromShowcase({ quantity: number }): Chainable<void>

    /** Remove all products from wishlist */
    clearWishlist(): Chainable<void>

    /** 1. Add products to wishlist
     *  2. Remove products from wishlist
     */
    addAndRemoveProductsFromWishlist(): Chainable<void>

    /** 1. Open user dropdown
     *	2. Check quantity in wishlist link
     *  3. Close user dropdown
     * Example:
     * ```ts
     * cy.checkWishlistItemsAndClose({ quantity: 5 })
     * ```
     */
    checkWishlistItemsAndClose({ quantity: number }): Chainable<void>
  }
}
