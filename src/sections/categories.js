import { categories } from '../data/categories.js'

const categoryImages = {
  'Furniture': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop',
  'Electronics': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop',
  'Fashion': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
  'Accessories': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
  'Home & Decor': 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=500&fit=crop',
}

const categoryColors = [
  'bg-violet-500',
  'bg-blue-500',
  'bg-pink-500',
  'bg-amber-500',
  'bg-emerald-500',
]

const categoryIcons = {
  'Furniture': `<i class="fa-solid fa-couch"></i>`,
  'Electronics': `<i class="fa-solid fa-desktop"></i>`,
  'Fashion': `<i class="fa-solid fa-bag-shopping"></i>`,
  'Accessories': `<i class="fa-regular fa-clock"></i>`,
  'Home & Decor': `<i class="fa-solid fa-house"></i>`,
}

/**
 * Create the VENORA categories section with image cards matching reference
 * @returns {HTMLElement}
 */
export function createCategories() {
  const section = document.createElement('section')
  section.id = 'categories'
  section.className = 'py-16 bg-white dark:bg-gray-950 transition-colors duration-300'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Shop by Category</h2>
        <p class="mt-2 text-gray-500 dark:text-gray-400">Browse our top categories and find what you need</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        ${categories.slice(0, 5).map((cat, i) => `
          <a href="/src/pages/shop/?category=${cat.slug}" class="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
            <img src="${categoryImages[cat.name] || 'https://placehold.co/400x500/f5f3ff/7c3aed?text=' + cat.name}"
              alt="${cat.name}"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 text-center">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full ${categoryColors[i]} text-white mb-2 shadow-lg">
                ${categoryIcons[cat.name] || cat.name[0]}
              </span>
              <p class="text-white font-semibold text-sm">${cat.name}</p>
              <p class="text-white/70 text-xs">${cat.count}+ Products</p>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `

  return section
}
