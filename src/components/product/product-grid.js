import { createProductCard } from './product-card.js'

/**
 * Create a product grid
 * @param {Array} products
 * @param {number} [cols=4] - Number of columns on desktop
 * @returns {HTMLElement}
 */
export function createProductGrid(products, cols = 4) {
  const grid = document.createElement('div')
  grid.className = `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${cols} gap-4 md:gap-6`

  products.forEach(product => {
    grid.appendChild(createProductCard(product))
  })

  return grid
}
