import { getWishlist, onWishlistChange, removeFromWishlist } from '../store/wishlistStore.js'
import { addToCart } from '../store/cartStore.js'
import { formatCurrency } from '../utils/formatCurrency.js'

/**
 * Favorites / wishlist page: list saved products, add to cart, demo-only checkout.
 * @returns {HTMLElement}
 */
export function createWishlistContent() {
  const section = document.createElement('section')
  section.className = 'py-10 md:py-14 bg-gray-50 dark:bg-gray-900 min-h-[50vh]'

  let pendingProduct = null

  const modal = document.createElement('div')
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.setAttribute('aria-labelledby', 'wishlist-demo-title')
  modal.className =
    'fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl max-w-md w-full p-6 relative">
      <button type="button" class="demo-close absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <p class="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-1">Demo checkout</p>
      <h2 id="wishlist-demo-title" class="text-lg font-bold text-gray-900 dark:text-white mb-1">Complete order (frontend only)</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">No payment or server — this simulates a purchase in your browser.</p>
      <div class="rounded-xl bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-700 p-3 mb-4">
        <p class="text-sm font-semibold text-gray-900 dark:text-white demo-product-name"></p>
        <p class="text-sm text-violet-600 dark:text-violet-400 font-bold demo-product-price"></p>
      </div>
      <form class="demo-form space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Name (optional)</label>
          <input name="demo-name" type="text" class="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none" placeholder="Jane Doe" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email (optional)</label>
          <input name="demo-email" type="email" class="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none" placeholder="you@example.com" />
        </div>
        <button type="submit" class="w-full py-3 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors">
          Confirm demo order
        </button>
      </form>
      <div class="demo-success hidden mt-4 rounded-xl border border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-900/20 p-4 text-center">
        <i class="fa-solid fa-circle-check text-green-600 dark:text-green-400 text-2xl mb-2"></i>
        <p class="text-sm font-semibold text-gray-900 dark:text-white demo-success-msg"></p>
        <a href="/src/pages/cart/" class="inline-block mt-3 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">View cart</a>
      </div>
    </div>
  `

  const inner = document.createElement('div')
  inner.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

  function closeModal() {
    modal.classList.add('hidden')
    modal.classList.remove('flex')
    pendingProduct = null
    const form = modal.querySelector('.demo-form')
    const success = modal.querySelector('.demo-success')
    form?.classList.remove('hidden')
    success?.classList.add('hidden')
    form?.reset()
  }

  function openModal(product) {
    pendingProduct = product
    modal.querySelector('.demo-product-name').textContent = product.name
    modal.querySelector('.demo-product-price').textContent = formatCurrency(product.price)
    modal.classList.remove('hidden')
    modal.classList.add('flex')
  }

  modal.querySelector('.demo-close')?.addEventListener('click', closeModal)
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal()
  })

  modal.querySelector('.demo-form')?.addEventListener('submit', e => {
    e.preventDefault()
    if (!pendingProduct) return
    const orderRef = `VEN-${Date.now().toString(36).toUpperCase()}`
    addToCart(pendingProduct, 1)
    removeFromWishlist(pendingProduct.id)
    const form = modal.querySelector('.demo-form')
    const success = modal.querySelector('.demo-success')
    form.classList.add('hidden')
    success.classList.remove('hidden')
    success.querySelector('.demo-success-msg').textContent =
      `Demo order ${orderRef} placed. Item added to your cart (simulation only).`
  })

  function createRow(product) {
    const row = document.createElement('div')
    row.className =
      'flex flex-col sm:flex-row sm:items-center gap-4 p-4 md:p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm'
    row.innerHTML = `
      <a href="/src/pages/product/?id=${product.id}" class="shrink-0 w-full sm:w-28 h-36 sm:h-28 rounded-xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-600">
        <img src="${product.image}" alt="" class="max-w-full max-h-full object-contain p-2" onerror="this.src='https://placehold.co/200x200/f5f3ff/7c3aed?text=Product'" />
      </a>
      <div class="flex-1 min-w-0">
        <a href="/src/pages/product/?id=${product.id}" class="font-semibold text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 line-clamp-2">${product.name}</a>
        <p class="text-lg font-bold text-violet-600 dark:text-violet-400 mt-1">${formatCurrency(product.price)}</p>
      </div>
      <div class="flex flex-wrap gap-2 sm:justify-end">
        <button type="button" data-add-cart class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <i class="fa-solid fa-cart-plus text-violet-600 dark:text-violet-400"></i>
          Add to cart
        </button>
        <button type="button" data-buy-demo class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors">
          <i class="fa-solid fa-bag-shopping"></i>
          Buy now (demo)
        </button>
        <button type="button" data-remove class="inline-flex items-center justify-center px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors" aria-label="Remove from favorites">
          <i class="fa-solid fa-heart-crack"></i>
        </button>
      </div>
    `
    row.querySelector('[data-add-cart]')?.addEventListener('click', () => {
      addToCart(product, 1)
      const btn = row.querySelector('[data-add-cart]')
      const prev = btn.innerHTML
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Added'
      btn.classList.add('border-green-500', 'text-green-700', 'dark:text-green-400')
      setTimeout(() => {
        btn.innerHTML = prev
        btn.classList.remove('border-green-500', 'text-green-700', 'dark:text-green-400')
      }, 1600)
    })
    row.querySelector('[data-buy-demo]')?.addEventListener('click', () => openModal(product))
    row.querySelector('[data-remove]')?.addEventListener('click', () => removeFromWishlist(product.id))
    return row
  }

  function render() {
    const items = getWishlist()
    inner.innerHTML = ''

    const banner = document.createElement('div')
    banner.className =
      'mb-8 rounded-2xl border border-violet-200 dark:border-violet-900/50 bg-violet-50 dark:bg-violet-950/30 px-4 py-3 text-sm text-violet-900 dark:text-violet-200'
    banner.innerHTML =
      '<i class="fa-solid fa-circle-info mr-2"></i><strong>Demo purchase:</strong> “Buy now (demo)” runs only in this browser — no real checkout or payment.'

    if (items.length === 0) {
      const empty = document.createElement('div')
      empty.className = 'text-center py-16 md:py-24 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50'
      empty.innerHTML = `
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400 text-2xl">
          <i class="fa-regular fa-heart"></i>
        </div>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">No favorites yet</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto mb-6">Save products you love from the shop — click the heart on any product card.</p>
        <a href="/src/pages/shop/" class="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors text-sm">
          Browse shop
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
      `
      inner.appendChild(banner)
      inner.appendChild(empty)
      return
    }

    const head = document.createElement('div')
    head.className = 'flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8'
    head.innerHTML = `
      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Your favorites</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${items.length} saved item${items.length === 1 ? '' : 's'}</p>
      </div>
      <a href="/src/pages/shop/" class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline shrink-0">
        Continue shopping
        <i class="fa-solid fa-arrow-right text-xs"></i>
      </a>
    `

    const list = document.createElement('div')
    list.className = 'space-y-4'
    items.forEach(p => list.appendChild(createRow(p)))

    inner.appendChild(banner)
    inner.appendChild(head)
    inner.appendChild(list)
  }

  section.appendChild(inner)
  document.body.appendChild(modal)

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal()
  })

  onWishlistChange(render)
  render()

  return section
}
