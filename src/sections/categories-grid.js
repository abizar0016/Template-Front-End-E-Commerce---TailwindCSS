import { categories } from '../data/categories.js'

/**
 * Categories landing: grid of category cards linking to shop with ?category= slug.
 * @returns {HTMLElement}
 */
export function createCategoriesGrid() {
  const section = document.createElement('section')
  section.className = 'py-14 bg-white dark:bg-gray-950'
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${categories
          .map(
            cat => `
          <a href="/src/pages/shop/?category=${cat.slug}" class="group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300">
            <div class="aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-gray-700/50">
              <img src="${cat.image}" alt="${cat.name}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onerror="this.src='https://placehold.co/400x300/f5f3ff/7c3aed?text=${encodeURIComponent(cat.name)}'" />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                  <i class="${cat.icon}"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 dark:text-white text-sm">${cat.name}</h3>
                  <p class="text-xs text-gray-400 dark:text-gray-500">${cat.count} Products</p>
                </div>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">${cat.description}</p>
              <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:gap-2.5 transition-all duration-200">
                Shop Now <i class="fa-solid fa-arrow-right text-xs"></i>
              </span>
            </div>
          </a>
        `
          )
          .join('')}
      </div>
    </div>
  `
  return section
}
