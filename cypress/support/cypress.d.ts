declare namespace Cypress {
  interface Chainable {
    /** Switch between BannerSlider slides and verify banner visibility */
    toggleBanner(): Chainable<void>
  }
}
