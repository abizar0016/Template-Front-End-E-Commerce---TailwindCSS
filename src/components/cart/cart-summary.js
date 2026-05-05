import { formatCurrency } from '../../utils/formatCurrency.js'
import { getCartTotal, getCartCount } from '../../store/cartStore.js'

/**
 * Create the cart summary / order summary
 * @returns {HTMLElement}
 */
export function createCartSummary() {
  const summary = document.createElement('div')
  summary.className = 'bg-gray-50 rounded-2xl p-6 space-y-4'

  function render() {
    const total = getCartTotal()
    const count = getCartCount()
    const shipping = total > 500000 ? 0 : 25000

    summary.innerHTML = `
      <h3 class="text-lg font-semibold text-gray-900">Order Summary</h3>
      <div class="space-y-3 text-sm">
        <div class="flex justify-between text-gray-600">
          <span>Subtotal (${count} items)</span>
          <span>${formatCurrency(total)}</span>
        </div>
        <div class="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>${shipping === 0 ? '<span class="text-green-600 font-medium">Free</span>' : formatCurrency(shipping)}</span>
        </div>
        <div class="border-t border-gray-200 pt-3 flex justify-between font-semibold text-gray-900 text-base">
          <span>Total</span>
          <span>${formatCurrency(total + shipping)}</span>
        </div>
      </div>
      <button class="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer">
        Proceed to Checkout
      </button>
      <p class="text-xs text-center text-gray-400">Free shipping on orders over Rp500.000</p>
    `
  }

  render()
  return summary
}
