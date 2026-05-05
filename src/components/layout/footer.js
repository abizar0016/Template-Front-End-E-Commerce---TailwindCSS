/**
 * Create the footer
 * @returns {HTMLElement}
 */
export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'bg-gray-900 text-gray-300'

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1">
          <h3 class="text-xl font-bold text-white mb-3">ShopVite</h3>
          <p class="text-sm text-gray-400 leading-relaxed">Your one-stop destination for premium products at great prices.</p>
        </div>

        <!-- Shop -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-3">Shop</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm hover:text-white transition-colors">All Products</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Sale</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-3">Company</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-3">Support</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" class="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
        &copy; ${new Date().getFullYear()} ShopVite. All rights reserved.
      </div>
    </div>
  `

  return footer
}
