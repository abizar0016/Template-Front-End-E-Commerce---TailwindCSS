/**
 * Create the VENORA footer (full columns + payment icons)
 * @returns {HTMLElement}
 */
export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'bg-gray-900 dark:bg-gray-950 text-gray-400 border-t border-gray-800'

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3.5 6h17M16 10a4 4 0 01-8 0" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span class="text-lg font-bold text-white tracking-tight">VENORA</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-500 mb-4">Your trusted one-stop for quality products and the best shopping experience.</p>
          <div class="flex gap-3">
            <a href="#" class="w-8 h-8 rounded-full bg-gray-800 hover:bg-violet-600 flex items-center justify-center transition-colors" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-800 hover:bg-violet-600 flex items-center justify-center transition-colors" aria-label="Instagram">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-800 hover:bg-violet-600 flex items-center justify-center transition-colors" aria-label="Twitter">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2.5">
            <li><a href="/" class="text-sm hover:text-violet-400 transition-colors">Home</a></li>
            <li><a href="/src/pages/shop/" class="text-sm hover:text-violet-400 transition-colors">Shop</a></li>
            <li><a href="#categories" class="text-sm hover:text-violet-400 transition-colors">Categories</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">About Us</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Customer Service</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Help & Support</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Track Order</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Shipping Info</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Return Policy</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <!-- Account -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Account</h4>
          <ul class="space-y-2.5">
            <li><a href="/src/pages/auth/login.html" class="text-sm hover:text-violet-400 transition-colors">My Account</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Wishlist</a></li>
            <li><a href="/src/pages/cart/" class="text-sm hover:text-violet-400 transition-colors">Shopping Cart</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Order History</a></li>
            <li><a href="#" class="text-sm hover:text-violet-400 transition-colors">Logout</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Info</h4>
          <ul class="space-y-2.5 text-sm">
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              support@venora.com
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              +1 (555) 123-4567
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              1234 Market St, San Francisco, CA 94103
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-600">&copy; ${new Date().getFullYear()} VENORA. All rights reserved.</p>
        <!-- Payment icons -->
        <div class="flex items-center gap-3">
          <div class="bg-gray-800 rounded px-2.5 py-1.5 text-xs font-bold text-blue-400">VISA</div>
          <div class="bg-gray-800 rounded px-2.5 py-1.5 text-xs font-bold text-red-400">MC</div>
          <div class="bg-gray-800 rounded px-2.5 py-1.5 text-xs font-bold text-blue-300">PayPal</div>
          <div class="bg-gray-800 rounded px-2.5 py-1.5 text-xs font-bold text-gray-300">Pay</div>
        </div>
      </div>
    </div>
  `

  return footer
}
