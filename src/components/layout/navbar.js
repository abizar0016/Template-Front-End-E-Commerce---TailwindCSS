import { getCartCount, onCartChange } from '../../store/cartStore.js'
import { toggleTheme, getTheme } from '../../main.js'

/**
 * Create the VENORA navigation bar with top bar
 * @returns {HTMLElement}
 */
export function createNavbar() {
  const wrapper = document.createElement('div')
  wrapper.className = 'sticky top-0 z-50'

  const currentPath = window.location.pathname
  function isActive(path) {
    if (path === '/' && (currentPath === '/' || currentPath === '/index.html')) return true
    if (path !== '/' && currentPath.includes(path)) return true
    return false
  }
  function navLinkClass(path) {
    return isActive(path)
      ? 'text-sm font-semibold text-violet-600 dark:text-violet-400'
      : 'text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors'
  }

  wrapper.innerHTML = `
    <!-- Top Bar -->
    <div class="bg-gray-900 dark:bg-black text-gray-300 text-xs py-2 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
          <span>Free shipping on orders over $100</span>
        </div>
        <div class="hidden md:flex items-center gap-4">
          <a href="#" class="hover:text-white transition-colors">Help & Support</a>
          <span class="text-gray-600">|</span>
          <a href="#" class="hover:text-white transition-colors">Track Order</a>
          <span class="text-gray-600">|</span>
          <span>English | USD</span>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav class="bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 gap-6">
          <!-- Logo -->
          <a href="/" class="flex items-center gap-2 shrink-0">
            <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3.5 6h17M16 10a4 4 0 01-8 0" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span class="text-lg font-bold text-gray-900 dark:text-white tracking-tight">VENORA</span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden lg:flex items-center gap-7">
            <a href="/" class="${navLinkClass('/')}">Home</a>
            <a href="/src/pages/shop/" class="${navLinkClass('/shop')}">Shop</a>
            <a href="#categories" class="${navLinkClass('/categories')}">Categories</a>
            <a href="#" class="${navLinkClass('/about')}">About</a>
            <a href="#" class="${navLinkClass('/contact')}">Contact</a>
          </div>

          <!-- Search Bar -->
          <div class="hidden md:flex flex-1 max-w-xs">
            <div class="relative w-full">
              <input type="text" placeholder="Search for products..." class="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" />
              <div class="absolute left-0 top-0 w-9 h-full flex items-center justify-center">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2">
            <!-- Theme Toggle -->
            <button id="theme-toggle" class="p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer" aria-label="Toggle theme">
              ${getTheme() === 'dark'
                ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'
                : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>'}
            </button>

            <!-- User -->
            <a href="/src/pages/auth/login.html" class="p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="Account">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </a>

            <!-- Wishlist -->
            <a href="#" class="p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="Wishlist">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </a>

            <!-- Cart -->
            <a href="/src/pages/cart/" class="relative p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="Cart">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
              <span id="cart-badge" class="absolute -top-0.5 -right-0.5 bg-violet-600 text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full hidden">0</span>
            </a>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 cursor-pointer" aria-label="Menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="lg:hidden hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div class="px-4 py-3 space-y-1">
          <div class="pb-3 mb-2 border-b border-gray-100 dark:border-gray-800">
            <input type="text" placeholder="Search for products..." class="w-full px-4 py-2.5 text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <a href="/" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">Home</a>
          <a href="/src/pages/shop/" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">Shop</a>
          <a href="#categories" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">Categories</a>
          <a href="#" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">About</a>
          <a href="#" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">Contact</a>
        </div>
      </div>
    </nav>
  `

  // Mobile menu toggle
  wrapper.querySelector('#mobile-menu-btn')?.addEventListener('click', () => {
    wrapper.querySelector('#mobile-menu').classList.toggle('hidden')
  })

  // Theme toggle
  wrapper.querySelector('#theme-toggle')?.addEventListener('click', () => {
    const theme = toggleTheme()
    const btn = wrapper.querySelector('#theme-toggle')
    btn.innerHTML = theme === 'dark'
      ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'
      : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>'
  })

  // Cart badge
  function updateBadge() {
    const count = getCartCount()
    const badge = wrapper.querySelector('#cart-badge')
    if (badge) {
      badge.textContent = count
      badge.classList.toggle('hidden', count === 0)
    }
  }
  updateBadge()
  onCartChange(updateBadge)

  return wrapper
}
