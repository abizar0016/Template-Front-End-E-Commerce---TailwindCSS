import { formatCurrency } from '../../utils/formatCurrency.js'
import { getCartTotal, getCartCount } from '../../store/cartStore.js'

/**
 * Create the VENORA cart summary
 * @returns {HTMLElement}
 */
export function createCartSummary() {
  const summary = document.createElement('div')
  summary.className = 'bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-5 sticky top-24'

  const total = getCartTotal()
  const count = getCartCount()
  const shipping = total > 100 ? 0 : 10

  summary.innerHTML = `
    <h3 class="text-lg font-bold text-gray-900 dark:text-white">Order Summary</h3>
    <div class="space-y-3 text-sm">
      <div class="flex justify-between text-gray-600 dark:text-gray-400">
        <span>Subtotal (${count} items)</span>
        <span class="font-medium text-gray-900 dark:text-white">${formatCurrency(total)}</span>
      </div>
      <div class="flex justify-between text-gray-600 dark:text-gray-400">
        <span>Shipping</span>
        <span class="font-medium ${shipping === 0 ? 'text-green-600' : 'text-gray-900 dark:text-white'}">${shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-bold text-gray-900 dark:text-white text-base">
        <span>Total</span>
        <span>${formatCurrency(total + shipping)}</span>
      </div>
    </div>
    <button class="w-full py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors cursor-pointer shadow-lg shadow-violet-600/25">
      Proceed to Checkout
    </button>
    <p class="text-xs text-center text-gray-400 dark:text-gray-500">Free shipping on orders over $100</p>
  `

  return summary
}
