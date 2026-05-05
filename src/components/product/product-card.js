import { formatCurrency } from '../../utils/formatCurrency.js'
import { addToCart } from '../../store/cartStore.js'

/**
 * Create a product card (VENORA style with wishlist + cart buttons)
 * @param {Object} product
 * @returns {HTMLElement}
 */
export function createProductCard(product) {
  const card = document.createElement('div')
  card.className = 'group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300'

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  card.innerHTML = `
    <a href="/src/pages/product/?id=${product.id}" class="block">
      <div class="relative aspect-square bg-gray-50 dark:bg-gray-700/50 overflow-hidden p-6 flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}"
          class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          onerror="this.src='https://placehold.co/300x300/f5f3ff/7c3aed?text=${encodeURIComponent(product.name)}'" />
        ${discount ? `<span class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">${discount}%</span>` : ''}
        <!-- Wishlist -->
        <button class="wishlist-btn absolute top-3 right-3 w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-violet-50 dark:hover:bg-violet-900/30 cursor-pointer border border-gray-100 dark:border-gray-600">
          <svg class="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
      </div>
    </a>
    <div class="p-4">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-1.5 line-clamp-1 text-sm">${product.name}</h3>
      <div class="flex items-center gap-1 mb-2">
        <div class="flex text-yellow-400 text-xs">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
        <span class="text-xs text-gray-400">(${product.reviews})</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-baseline gap-2">
          <span class="font-bold text-gray-900 dark:text-white">${formatCurrency(product.price)}</span>
          ${product.originalPrice ? `<span class="text-xs text-gray-400 line-through">${formatCurrency(product.originalPrice)}</span>` : ''}
        </div>
        <button class="add-cart-btn w-9 h-9 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all duration-200 cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
        </button>
      </div>
    </div>
  `

  // Wishlist
  card.querySelector('.wishlist-btn')?.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    const svg = e.currentTarget.querySelector('svg')
    svg.setAttribute('fill', svg.getAttribute('fill') === 'none' ? 'currentColor' : 'none')
    svg.classList.toggle('text-red-500')
    svg.classList.toggle('text-gray-400')
  })

  // Add to cart
  card.querySelector('.add-cart-btn')?.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    const btn = e.currentTarget
    btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
    btn.classList.add('bg-green-500', 'text-white')
    setTimeout(() => {
      btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>'
      btn.classList.remove('bg-green-500', 'text-white')
    }, 1500)
  })

  return card
}
