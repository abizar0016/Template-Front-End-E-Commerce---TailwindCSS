/**
 * Create the VENORA promo banner (Summer Sale matching reference)
 * @returns {HTMLElement}
 */
export function createPromoBanner() {
  const section = document.createElement('section')
  section.className = 'py-16 bg-white dark:bg-gray-950 transition-colors duration-300'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-100 via-violet-50 to-purple-100 dark:from-violet-900/30 dark:via-gray-900 dark:to-purple-900/20">
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <!-- Left Content -->
          <div class="p-10 md:p-14">
            <span class="text-violet-600 dark:text-violet-400 font-semibold text-sm mb-3 block">Summer Sale</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
              Up to <span class="text-violet-600 dark:text-violet-400 italic">50% Off</span>
            </h2>
            <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">For All Products</p>
            <p class="text-gray-500 dark:text-gray-400 mb-8 max-w-sm text-sm leading-relaxed">Get the best deals on our selected products this summer.</p>
            <a href="/src/pages/shop/" class="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-600/25 text-sm">
              Shop Now
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
          <!-- Right Image -->
          <div class="hidden md:block relative h-full min-h-[320px]">
            <img src="/images/banners/promo-sofa.png" alt="Summer sale – Modern sofa with plant"
              class="absolute inset-0 w-full h-full object-cover"
              onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop'" />
          </div>
        </div>
      </div>
    </div>
  `

  return section
}
