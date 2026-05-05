import { categories } from '../data/categories.js'

/**
 * Create the categories section
 * @returns {HTMLElement}
 */
export function createCategories() {
  const section = document.createElement('section')
  section.className = 'py-16 bg-gray-50'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Shop by Category</h2>
        <p class="mt-2 text-gray-500">Find what you're looking for</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        ${categories.map(cat => `
          <a href="/src/pages/shop/?category=${cat.slug}" class="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-200">
            <span class="text-3xl group-hover:scale-110 transition-transform duration-200">${cat.icon}</span>
            <span class="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">${cat.name}</span>
            <span class="text-xs text-gray-400">${cat.count} products</span>
          </a>
        `).join('')}
      </div>
    </div>
  `

  return section
}
