import { formatCurrency } from '../../utils/formatCurrency.js'
import { getCartTotal, getCartCount, clearCart } from '../../store/cartStore.js'

let modalEl = null

function ensureCheckoutModal() {
  if (modalEl) return modalEl
  modalEl = document.createElement('div')
  modalEl.setAttribute('role', 'dialog')
  modalEl.setAttribute('aria-modal', 'true')
  modalEl.setAttribute('aria-labelledby', 'cart-checkout-title')
  modalEl.className =
    'fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
  modalEl.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl max-w-md w-full p-6 relative">
      <button type="button" class="cart-checkout-close absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <p class="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-1">Demo checkout</p>
      <h2 id="cart-checkout-title" class="text-lg font-bold text-gray-900 dark:text-white mb-1">Complete your order</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Frontend simulation only — no payment is processed.</p>
      <div class="rounded-xl bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-700 p-3 mb-4 space-y-2 text-sm">
        <div class="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Subtotal</span>
          <span class="font-medium text-gray-900 dark:text-white cart-modal-subtotal"></span>
        </div>
        <div class="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Shipping</span>
          <span class="font-medium cart-modal-shipping"></span>
        </div>
        <div class="flex justify-between font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-gray-600">
          <span>Total</span>
          <span class="cart-modal-total"></span>
        </div>
      </div>
      <form class="cart-checkout-form space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Name (optional)</label>
          <input name="name" type="text" class="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none" placeholder="Jane Doe" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email (optional)</label>
          <input name="email" type="email" class="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none" placeholder="you@example.com" />
        </div>
        <button type="submit" class="w-full py-3 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors">
          Confirm demo order
        </button>
      </form>
      <div class="cart-checkout-success hidden mt-4 rounded-xl border border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-900/20 p-4 text-center">
        <i class="fa-solid fa-circle-check text-green-600 dark:text-green-400 text-2xl mb-2"></i>
        <p class="text-sm font-semibold text-gray-900 dark:text-white cart-checkout-success-msg"></p>
        <button type="button" class="cart-checkout-done mt-3 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">Close</button>
      </div>
    </div>
  `
  document.body.appendChild(modalEl)

  function closeModal() {
    modalEl.classList.add('hidden')
    modalEl.classList.remove('flex')
    modalEl.querySelector('.cart-checkout-form')?.classList.remove('hidden')
    modalEl.querySelector('.cart-checkout-success')?.classList.add('hidden')
    modalEl.querySelector('.cart-checkout-form')?.reset()
  }

  modalEl.querySelector('.cart-checkout-close')?.addEventListener('click', closeModal)
  modalEl.querySelector('.cart-checkout-done')?.addEventListener('click', closeModal)
  modalEl.addEventListener('click', e => {
    if (e.target === modalEl) closeModal()
  })
  modalEl.querySelector('.cart-checkout-form')?.addEventListener('submit', e => {
    e.preventDefault()
    const orderRef = `VEN-${Date.now().toString(36).toUpperCase()}`
    clearCart()
    const form = modalEl.querySelector('.cart-checkout-form')
    const success = modalEl.querySelector('.cart-checkout-success')
    form.classList.add('hidden')
    success.classList.remove('hidden')
    success.querySelector('.cart-checkout-success-msg').textContent =
      `Demo order ${orderRef} completed. Your cart has been cleared (simulation only).`
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalEl && !modalEl.classList.contains('hidden')) closeModal()
  })

  return modalEl
}

function openCheckoutModal(subtotal, shipping, grandTotal) {
  const modal = ensureCheckoutModal()
  modal.querySelector('.cart-modal-subtotal').textContent = formatCurrency(subtotal)
  const shipEl = modal.querySelector('.cart-modal-shipping')
  shipEl.textContent = shipping === 0 ? 'Free' : formatCurrency(shipping)
  shipEl.className = `font-medium ${shipping === 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`
  modal.querySelector('.cart-modal-total').textContent = formatCurrency(grandTotal)
  modal.querySelector('.cart-checkout-form')?.classList.remove('hidden')
  modal.querySelector('.cart-checkout-success')?.classList.add('hidden')
  modal.classList.remove('hidden')
  modal.classList.add('flex')
}

/**
 * Create the VENORA cart summary (updates when cart changes; demo checkout when not empty)
 * @returns {HTMLElement}
 */
export function createCartSummary() {
  const summary = document.createElement('div')
  summary.className = 'bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 space-y-5 sticky top-24'

  function paint() {
    const total = getCartTotal()
    const count = getCartCount()
    const empty = count === 0
    const shipping = empty ? 0 : total > 100 ? 0 : 10
    const grandTotal = empty ? 0 : total + shipping

    summary.innerHTML = `
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">Order Summary</h3>
      <div class="space-y-3 text-sm">
        <div class="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Subtotal (${count} item${count === 1 ? '' : 's'})</span>
          <span class="font-medium text-gray-900 dark:text-white">${formatCurrency(total)}</span>
        </div>
        <div class="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Shipping</span>
          <span class="font-medium ${empty ? 'text-gray-400 dark:text-gray-500' : shipping === 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}">${empty ? '—' : shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-bold text-gray-900 dark:text-white text-base">
          <span>Total</span>
          <span>${formatCurrency(grandTotal)}</span>
        </div>
      </div>
      <button type="button" id="cart-checkout-btn" class="w-full py-3.5 rounded-full font-semibold transition-colors cursor-pointer shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 ${empty ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed shadow-none' : 'bg-violet-600 text-white hover:bg-violet-700'}" ${empty ? 'disabled' : ''}>
        <i class="fa-solid fa-lock-open text-sm"></i>
        Proceed to Checkout
      </button>
      <p class="text-xs text-center text-gray-400 dark:text-gray-500">Free shipping on orders over $100</p>
    `

    const btn = summary.querySelector('#cart-checkout-btn')
    if (btn && !empty) {
      btn.addEventListener('click', () => openCheckoutModal(total, shipping, grandTotal))
    }
  }

  paint()
  return summary
}
