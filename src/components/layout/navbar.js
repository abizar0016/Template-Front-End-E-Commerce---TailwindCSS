import { getCartCount, onCartChange } from '../../store/cartStore.js'
import { getWishlistCount, onWishlistChange } from '../../store/wishlistStore.js'
import { toggleTheme, getTheme } from '../../main.js'

/**
 * Create the VENORA navigation bar with announcement top bar
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
      ? 'text-sm font-semibold text-violet-600 dark:text-violet-400 relative nav-link-active'
      : 'text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors'
  }

  wrapper.innerHTML = `

    <!-- Main Navbar -->
    <nav class="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 gap-6">
          <!-- Logo -->
          <a href="/" class="flex items-center gap-2 shrink-0">
            <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-bag-shopping text-white"></i>
            </div>
            <span class="text-lg font-bold text-gray-900 dark:text-white tracking-tight">VENORA</span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden lg:flex items-center gap-7">
            <a href="/" class="${navLinkClass('/')}">Home</a>
            <a href="/src/pages/shop/" class="${navLinkClass('/shop')}">Shop</a>
            <a href="/src/pages/wishlist/" class="${navLinkClass('/wishlist')}">Favorites</a>
            <a href="/src/pages/categories/" class="${navLinkClass('/categories')}">Categories</a>
            <a href="/src/pages/about/" class="${navLinkClass('/about')}">About</a>
            <a href="/src/pages/contact/" class="${navLinkClass('/contact')}">Contact</a>
          </div>

          <!-- Search Bar -->
          <div class="hidden md:flex flex-1 max-w-xs">
            <div class="relative w-full">
              <input type="text" placeholder="Search for products..." class="w-full pl-10 pr-12 py-2.5 text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" />
              <div class="absolute left-3.5 top-1/2 -translate-y-1/2">
                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
              </div>
              <button class="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors cursor-pointer">
                <i class="fa-solid fa-magnifying-glass text-white text-xs"></i>
              </button>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-1">
            <!-- Theme Toggle: satu ikon berganti (bulan → gelap, matahari → terang) -->
            <button id="theme-toggle" type="button" class="p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer" aria-label="Toggle theme">
              <i id="theme-toggle-icon" class="fa-solid fa-moon text-[18px]" aria-hidden="true"></i>
            </button>

            <!-- User -->
            <a href="/src/pages/auth/login.html" class="p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="Account">
              <i class="fa-regular fa-user text-[18px]"></i>
            </a>

            <!-- Wishlist -->
            <a href="/src/pages/wishlist/" class="relative p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="Favorites">
              <i class="fa-regular fa-heart text-[18px]"></i>
              <span id="wishlist-badge" class="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full hidden">0</span>
            </a>

            <!-- Cart -->
            <a href="/src/pages/cart/" class="relative p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors" aria-label="Cart">
              <i class="fa-solid fa-cart-shopping text-[18px]"></i>
              <span id="cart-badge" class="absolute -top-0.5 -right-0.5 bg-violet-600 text-white text-[10px] font-bold w-[18px] h-[18px] flex items-center justify-center rounded-full hidden">0</span>
            </a>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 cursor-pointer" aria-label="Menu">
              <i class="fa-solid fa-bars text-xl"></i>
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
          <a href="/src/pages/wishlist/" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">Favorites</a>
          <a href="/src/pages/categories/" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">Categories</a>
          <a href="/src/pages/about/" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">About</a>
          <a href="/src/pages/contact/" class="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600">Contact</a>
        </div>
      </div>
    </nav>
  `

  // Mobile menu toggle
  wrapper.querySelector('#mobile-menu-btn')?.addEventListener('click', () => {
    wrapper.querySelector('#mobile-menu').classList.toggle('hidden')
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

  // Wishlist badge
  function updateWishlistBadge() {
    const count = getWishlistCount()
    const badge = wrapper.querySelector('#wishlist-badge')
    if (badge) {
      badge.textContent = count
      badge.classList.toggle('hidden', count === 0)
    }
  }
  updateWishlistBadge()
  onWishlistChange(updateWishlistBadge)

  const themeBtn = wrapper.querySelector('#theme-toggle')
  function syncThemeToggleUi() {
    if (!themeBtn) return
    const theme = getTheme()
    const icon = themeBtn.querySelector('#theme-toggle-icon')
    if (icon) {
      icon.className =
        theme === 'dark'
          ? 'fa-solid fa-sun text-[18px]'
          : 'fa-solid fa-moon text-[18px]'
    }
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
    themeBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false')
    themeBtn.title = theme === 'dark' ? 'Light mode' : 'Dark mode'
  }
  syncThemeToggleUi()
  themeBtn?.addEventListener('click', () => {
    toggleTheme()
    syncThemeToggleUi()
  })

  return wrapper
}
