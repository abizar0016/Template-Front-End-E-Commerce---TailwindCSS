import { products } from '../data/products.js'
import { createProductGrid } from '../components/product/product-grid.js'

/**
 * Create the featured products section
 * @returns {HTMLElement}
 */
export function createFeaturedProducts() {
  const section = document.createElement('section')
  section.id = 'featured'
  section.className = 'py-16'

  const header = document.createElement('div')
  header.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  header.innerHTML = `
    <div class="flex items-end justify-between mb-10">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
        <p class="mt-2 text-gray-500">Our handpicked selections for you</p>
      </div>
      <a href="/src/pages/shop/" class="hidden md:inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
        View All →
      </a>
    </div>
  `

  const gridWrapper = document.createElement('div')
  gridWrapper.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  gridWrapper.appendChild(createProductGrid(products.slice(0, 8), 4))

  section.append(header, gridWrapper)
  return section
}
