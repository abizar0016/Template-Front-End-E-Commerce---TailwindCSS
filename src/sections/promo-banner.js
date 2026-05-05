/**
 * Create the VENORA promo banner (Summer Sale style)
 * @returns {HTMLElement}
 */
export function createPromoBanner() {
  const section = document.createElement('section')
  section.className = 'py-16 bg-white dark:bg-gray-950 transition-colors duration-300'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-100 via-violet-50 to-purple-100 dark:from-violet-900/30 dark:via-gray-900 dark:to-purple-900/20 p-10 md:p-14">
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span class="text-violet-600 dark:text-violet-400 font-semibold text-sm mb-3 block">Summer Sale</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
              Up to <span class="text-violet-600 dark:text-violet-400">50% Off</span>
            </h2>
            <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">For All Products</p>
            <p class="text-gray-500 dark:text-gray-400 mb-8 max-w-sm text-sm">Get the best deals on our selected products this summer.</p>
            <a href="/src/pages/shop/" class="inline-flex items-center gap-2 px-7 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-600/25 text-sm">
              Shop Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div class="hidden md:flex justify-center">
            <img src="/images/products/chair.png" alt="Summer sale"
              class="w-72 object-contain drop-shadow-2xl"
              onerror="this.src='https://placehold.co/300x300/ede9fe/7c3aed?text=Sale'" />
          </div>
        </div>
      </div>
    </div>
  `

  return section
}
