/**
 * Create a badge element
 * @param {Object} options
 * @param {string} options.text
 * @param {string} [options.variant='default'] - 'default' | 'success' | 'warning' | 'danger' | 'info'
 * @returns {HTMLSpanElement}
 */
export function createBadge({ text, variant = 'default' }) {
  const badge = document.createElement('span')

  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-indigo-100 text-indigo-700',
  }

  badge.className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant] || variants.default}`
  badge.textContent = text

  return badge
}
