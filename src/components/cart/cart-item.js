import { formatCurrency } from '../../utils/formatCurrency.js'
import { updateQty, removeFromCart } from '../../store/cartStore.js'

/**
 * Create a cart item row
 * @param {Object} item - Cart item (product + qty)
 * @returns {HTMLElement}
 */
export function createCartItem(item) {
  const row = document.createElement('div')
  row.className = 'flex items-center gap-4 py-4 border-b border-gray-100'

  row.innerHTML = `
    <img src="${item.image}" alt="${item.name}"
      class="w-20 h-20 rounded-xl object-cover bg-gray-50"
      onerror="this.src='https://placehold.co/80x80/f3f4f6/9ca3af?text=Item'" />
    <div class="flex-1 min-w-0">
      <h4 class="font-medium text-gray-900 truncate">${item.name}</h4>
      <p class="text-sm text-gray-500">${formatCurrency(item.price)}</p>
    </div>
    <div class="flex items-center gap-2">
      <button class="qty-btn w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer" data-action="decrease">−</button>
      <span class="w-8 text-center text-sm font-medium">${item.qty}</span>
      <button class="qty-btn w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer" data-action="increase">+</button>
    </div>
    <p class="font-semibold text-gray-900 w-28 text-right">${formatCurrency(item.price * item.qty)}</p>
    <button class="remove-btn p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer" aria-label="Remove">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
      </svg>
    </button>
  `

  // Quantity buttons
  row.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action
      const newQty = action === 'increase' ? item.qty + 1 : item.qty - 1
      if (newQty < 1) {
        removeFromCart(item.id)
        row.remove()
      } else {
        updateQty(item.id, newQty)
      }
    })
  })

  // Remove button
  row.querySelector('.remove-btn')?.addEventListener('click', () => {
    removeFromCart(item.id)
    row.remove()
  })

  return row
}
