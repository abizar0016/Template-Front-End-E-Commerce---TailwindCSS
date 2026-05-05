/**
 * Format number to Indonesian Rupiah currency
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
