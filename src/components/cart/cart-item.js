import { formatCurrency } from '../../utils/formatCurrency.js'
import { updateQty, removeFromCart } from '../../store/cartStore.js'

/**
 * Create a cart item row (VENORA style)
 * @param {Object} item
 * @returns {HTMLElement}
 */
export function createCartItem(item) {
  const row = document.createElement('div')
  row.className = 'flex items-center gap-4 sm:gap-6 py-5 border-b border-gray-100 dark:border-gray-800'

  const color = item.colors?.[0] || '#7C3AED'

  row.innerHTML = `
    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0">
      <img src="${item.image}" alt="${item.name}"
        class="w-16 h-16 sm:w-20 sm:h-20 object-contain"
        onerror="this.src='https://placehold.co/80x80/f5f3ff/7c3aed?text=Item'" />
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="font-semibold text-gray-900 dark:text-white truncate text-sm sm:text-base">${item.name}</h4>
      <div class="flex items-center gap-2 mt-1">
        <span class="w-3 h-3 rounded-full border border-gray-200 dark:border-gray-600" style="background-color: ${color}"></span>
        <span class="text-xs text-gray-400">${item.category || ''}</span>
      </div>
    </div>
    <div class="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-300 w-20 text-center">${formatCurrency(item.price)}</div>
    <div class="flex items-center gap-1.5">
      <button class="qty-btn w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-violet-400 hover:text-violet-600 transition-colors cursor-pointer text-sm" data-action="decrease">−</button>
      <span class="w-8 text-center text-sm font-semibold text-gray-900 dark:text-white">${item.qty}</span>
      <button class="qty-btn w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-violet-400 hover:text-violet-600 transition-colors cursor-pointer text-sm" data-action="increase">+</button>
    </div>
    <p class="font-bold text-gray-900 dark:text-white w-24 text-right text-sm sm:text-base">${formatCurrency(item.price * item.qty)}</p>
    <button class="remove-btn p-1.5 text-gray-300 dark:text-gray-600 hover:text-red-500 transition-colors cursor-pointer" aria-label="Remove">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
      </svg>
    </button>
  `

  row.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newQty = btn.dataset.action === 'increase' ? item.qty + 1 : item.qty - 1
      if (newQty < 1) { removeFromCart(item.id); row.remove() }
      else { updateQty(item.id, newQty); location.reload() }
    })
  })

  row.querySelector('.remove-btn')?.addEventListener('click', () => {
    removeFromCart(item.id); row.remove(); location.reload()
  })

  return row
}
