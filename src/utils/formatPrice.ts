export function formatPrice(price: number) {
  if (price === 0) {
    return 'Free'
  }

  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'usd'
  }).format(price)
}
