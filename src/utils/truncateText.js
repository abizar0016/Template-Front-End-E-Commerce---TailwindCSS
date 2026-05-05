/**
 * Truncate text to a maximum length and append ellipsis
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}
