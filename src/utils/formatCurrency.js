/**
 * Format number to USD currency
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return '$' + amount.toFixed(2)
}
