import { products } from '../data/products.js'
import { createProductGrid } from '../components/product/product-grid.js'

/**
 * Create the VENORA featured products section
 * @returns {HTMLElement}
 */
export function createFeaturedProducts() {
  const section = document.createElement('section')
  section.id = 'featured'
  section.className = 'py-16 bg-white dark:bg-gray-950 transition-colors duration-300'

  const header = document.createElement('div')
  header.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  header.innerHTML = `
    <div class="flex items-end justify-between mb-10">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
        <p class="mt-2 text-gray-500 dark:text-gray-400">Handpicked products just for you</p>
      </div>
      <a href="/src/pages/shop/" class="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors">
        View All
        <i class="fa-solid fa-arrow-right text-sm"></i>
      </a>
    </div>
  `

  const gridWrapper = document.createElement('div')
  gridWrapper.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  gridWrapper.appendChild(createProductGrid(products.slice(0, 5), 5))

  section.append(header, gridWrapper)
  return section
}
