/**
 * Create the VENORA footer (light theme matching reference)
 * @returns {HTMLElement}
 */
export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800'

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-bag-shopping text-white text-sm"></i>
            </div>
            <span class="text-lg font-bold text-gray-900 dark:text-white tracking-tight">VENORA</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-4">Your trusted online store for quality products and the best shopping experience.</p>
          <div class="flex gap-3">
            <a href="#" class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
              <i class="fa-brands fa-instagram text-sm"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
              <i class="fa-brands fa-twitter text-sm"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-colors" aria-label="Pinterest">
              <i class="fa-brands fa-pinterest-p text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
          <ul class="space-y-2.5">
            <li><a href="/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</a></li>
            <li><a href="/src/pages/shop/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Shop</a></li>
            <li><a href="/src/pages/categories/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Categories</a></li>
            <li><a href="/src/pages/about/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About</a></li>
            <li><a href="/src/pages/contact/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Customer Service</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Help & Support</a></li>
            <li><a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Track Order</a></li>
            <li><a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Shipping Info</a></li>
            <li><a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Return Policy</a></li>
            <li><a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <!-- Account -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Account</h4>
          <ul class="space-y-2.5">
            <li><a href="/src/pages/auth/login.html" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">My Account</a></li>
            <li><a href="/src/pages/wishlist/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Favorites</a></li>
            <li><a href="/src/pages/cart/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Shopping Cart</a></li>
            <li><a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Order History</a></li>
            <li><a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Logout</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h4>
          <ul class="space-y-2.5 text-sm">
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-envelope mt-0.5 text-violet-600 dark:text-violet-400 text-xs"></i>
              support@venora.com
            </li>
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-phone mt-0.5 text-violet-600 dark:text-violet-400 text-xs"></i>
              +1 (555) 123-4567
            </li>
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-location-dot mt-0.5 text-violet-600 dark:text-violet-400 text-xs"></i>
              1234 Market St, San Francisco, CA 94103, USA
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400 dark:text-gray-500">&copy; ${new Date().getFullYear()} VENORA. All rights reserved.</p>
        <!-- Payment icons -->
        <div class="flex items-center gap-3">
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-2.5 py-1.5 flex items-center justify-center"><i class="fa-brands fa-cc-visa text-xl text-blue-600"></i></div>
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-2.5 py-1.5 flex items-center justify-center"><i class="fa-brands fa-cc-mastercard text-xl text-red-500"></i></div>
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-2.5 py-1.5 flex items-center justify-center"><i class="fa-brands fa-cc-paypal text-xl text-blue-500"></i></div>
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded px-2.5 py-1.5 flex items-center justify-center"><i class="fa-brands fa-cc-apple-pay text-xl text-gray-800 dark:text-gray-300"></i></div>
        </div>
      </div>
    </div>
  `

  return footer
}
