import { formatCurrency } from '../../utils/formatCurrency.js'
import { addToCart } from '../../store/cartStore.js'
import { createBadge } from '../ui/badge.js'

/**
 * Create a product card
 * @param {Object} product
 * @returns {HTMLElement}
 */
export function createProductCard(product) {
  const card = document.createElement('div')
  card.className = 'group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1'

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  card.innerHTML = `
    <div class="relative aspect-square bg-gray-50 overflow-hidden">
      <img src="${product.image}" alt="${product.name}"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onerror="this.src='https://placehold.co/400x400/f3f4f6/9ca3af?text=Product'" />
      ${product.badge ? '' : ''}
      ${discount ? `<span class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-${discount}%</span>` : ''}
    </div>
    <div class="p-4">
      <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">${product.category}</p>
      <h3 class="font-semibold text-gray-900 mb-1 line-clamp-1">${product.name}</h3>
      <div class="flex items-center gap-1 mb-2">
        <span class="text-yellow-400 text-sm">★</span>
        <span class="text-sm text-gray-600">${product.rating}</span>
        <span class="text-xs text-gray-400">(${product.reviews})</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="font-bold text-gray-900">${formatCurrency(product.price)}</span>
          ${product.originalPrice ? `<span class="text-sm text-gray-400 line-through">${formatCurrency(product.originalPrice)}</span>` : ''}
        </div>
      </div>
    </div>
  `

  // Add badge
  if (product.badge) {
    const badgeVariant = product.badge === 'Sale' ? 'danger' : product.badge === 'New' ? 'info' : 'success'
    const badgeEl = createBadge({ text: product.badge, variant: badgeVariant })
    badgeEl.className += ' absolute top-3 left-3'
    card.querySelector('.relative')?.appendChild(badgeEl)
  }

  // Add to cart button
  const addBtn = document.createElement('button')
  addBtn.className = 'mt-3 w-full py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors cursor-pointer'
  addBtn.textContent = 'Add to Cart'
  addBtn.addEventListener('click', () => addToCart(product))
  card.querySelector('.p-4')?.appendChild(addBtn)

  return card
}
