/**
 * Wrap content in a centered container
 * @param {string} [className] - Additional classes
 * @param  {...HTMLElement} children
 * @returns {HTMLElement}
 */
export function createContainer(className = '', ...children) {
  const container = document.createElement('div')
  container.className = `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()
  children.forEach(child => container.appendChild(child))
  return container
}
