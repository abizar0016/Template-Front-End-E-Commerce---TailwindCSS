/**
 * Create the VENORA hero section with carousel indicators
 * @returns {HTMLElement}
 */
export function createHero() {
  const section = document.createElement('section')
  section.id = 'hero'
  section.className = 'relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-violet-950 transition-colors duration-300'

  section.innerHTML = `
    <!-- Decorative blobs -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-violet-200/40 dark:bg-violet-800/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-200/30 dark:bg-purple-800/15 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Left Content -->
        <div class="order-2 md:order-1">
          <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 mb-6">
            NEW COLLECTION
          </span>
          <h1 class="text-4xl sm:text-5xl md:text-[56px] font-bold text-gray-900 dark:text-white leading-[1.1] mb-6">
            Discover Products<br/>You'll <span class="text-violet-600 dark:text-violet-400">Love</span>
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md">
            High quality products, modern design, and the best experience for you.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/src/pages/shop/" class="inline-flex items-center gap-2 px-7 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-600/25 text-sm">
              Shop Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="#featured" class="inline-flex items-center px-7 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:border-violet-600 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400 transition-all duration-200 text-sm">
              Explore Collection
            </a>
          </div>
        </div>

        <!-- Right Image -->
        <div class="order-1 md:order-2 relative flex justify-center items-center">
          <div class="relative">
            <div class="w-64 h-64 sm:w-72 sm:h-72 md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-b from-violet-100 to-violet-200/50 dark:from-violet-900/30 dark:to-violet-800/20 flex items-center justify-center">
              <img src="/images/products/chair.png" alt="Featured product"
                class="w-56 sm:w-64 md:w-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                onerror="this.src='https://placehold.co/400x400/f5f3ff/7c3aed?text=Chair'" />
            </div>
            <!-- 50% OFF badge -->
            <div class="absolute top-2 right-2 md:top-4 md:right-0 w-16 h-16 bg-violet-600 rounded-full flex flex-col items-center justify-center shadow-lg shadow-violet-600/30">
              <span class="text-white text-sm font-bold leading-none">50%</span>
              <span class="text-white/80 text-[10px] font-medium">OFF</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Arrows -->
      <button class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-violet-600 transition-colors cursor-pointer border border-gray-100 dark:border-gray-700">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-violet-600 transition-colors cursor-pointer border border-gray-100 dark:border-gray-700">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>

      <!-- Carousel Dots -->
      <div class="flex justify-center gap-2 mt-8">
        <button class="w-8 h-2 rounded-full bg-violet-600 cursor-pointer"></button>
        <button class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-violet-400 cursor-pointer transition-colors"></button>
        <button class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-violet-400 cursor-pointer transition-colors"></button>
      </div>
    </div>
  `

  return section
}
