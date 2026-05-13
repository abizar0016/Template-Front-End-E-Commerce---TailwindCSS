import { createNavbar } from '../../components/layout/navbar.js'
import { createFooter } from '../../components/layout/footer.js'
import { createCartItem } from '../../components/cart/cart-item.js'
import { createCartSummary } from '../../components/cart/cart-summary.js'
import { getCart, onCartChange } from '../../store/cartStore.js'

/**
 * Mount cart page into #app; re-renders on cart store changes.
 * @param {HTMLElement} app
 */
export function mountCartPage(app) {
  function renderCartPage() {
    app.replaceChildren()
    const cart = getCart()
    const main = document.createElement('main')
    main.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'

    const emptyBlock =
      cart.length === 0
        ? `<div class="text-center py-16 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400 text-2xl">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-lg mb-2 font-medium">Your cart is empty</p>
            <p class="text-sm text-gray-400 dark:text-gray-500 mb-6">Add products from the shop to see them here.</p>
            <a href="/src/pages/shop/" class="inline-flex items-center gap-2 px-8 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors text-sm">
              <i class="fa-solid fa-bag-shopping"></i>
              Continue shopping
            </a>
          </div>`
        : ''

    main.innerHTML = `
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <i class="fa-solid fa-cart-shopping text-violet-600 dark:text-violet-400"></i>
          Your Cart (${cart.length})
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div id="cart-items" class="lg:col-span-2">${emptyBlock}</div>
          <div id="cart-summary"></div>
        </div>
      `

    if (cart.length > 0) {
      const container = main.querySelector('#cart-items')
      cart.forEach(item => container.appendChild(createCartItem(item)))
    }

    main.querySelector('#cart-summary').appendChild(createCartSummary())
    app.append(createNavbar(), main, createFooter())
  }

  onCartChange(renderCartPage)
  renderCartPage()
}
