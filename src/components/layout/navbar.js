import { getCartCount, onCartChange } from '../../store/cartStore.js'
import { toggleMobileMenu } from '../../store/uiStore.js'

/**
 * Create the navigation bar
 * @returns {HTMLElement}
 */
export function createNavbar() {
  const nav = document.createElement('nav')
  nav.className = 'sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100'

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="text-xl font-bold text-indigo-600 tracking-tight">ShopVite</a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a href="/" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          <a href="/src/pages/shop/" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Shop</a>
          <a href="#" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Categories</a>
          <a href="#" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Search -->
          <button class="p-2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer" aria-label="Search">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- Cart -->
          <a href="/src/pages/cart/" class="relative p-2 text-gray-500 hover:text-gray-700 transition-colors" aria-label="Cart">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span id="cart-badge" class="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full hidden">0</span>
          </a>

          <!-- Auth -->
          <a href="/src/pages/auth/login.html" class="hidden md:inline-flex px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            Sign In
          </a>

          <!-- Mobile Menu Toggle -->
          <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-500 hover:text-gray-700 cursor-pointer" aria-label="Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden border-t border-gray-100 bg-white">
      <div class="px-4 py-3 space-y-2">
        <a href="/" class="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">Home</a>
        <a href="/src/pages/shop/" class="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">Shop</a>
        <a href="#" class="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">Categories</a>
        <a href="#" class="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">About</a>
        <a href="/src/pages/auth/login.html" class="block px-3 py-2 text-sm font-medium text-indigo-600 rounded-lg hover:bg-indigo-50">Sign In</a>
      </div>
    </div>
  `

  // Mobile menu toggle
  const menuBtn = nav.querySelector('#mobile-menu-btn')
  const mobileMenu = nav.querySelector('#mobile-menu')
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    toggleMobileMenu()
  })

  // Update cart badge
  function updateBadge() {
    const count = getCartCount()
    const badge = nav.querySelector('#cart-badge')
    if (badge) {
      badge.textContent = count
      badge.classList.toggle('hidden', count === 0)
    }
  }
  updateBadge()
  onCartChange(updateBadge)

  return nav
}
