/**
 * Create the hero section
 * @returns {HTMLElement}
 */
export function createHero() {
  const section = document.createElement('section')
  section.id = 'hero'
  section.className = 'relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden'

  section.innerHTML = `
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div class="max-w-2xl">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm mb-6">
          🔥 New Collection 2026
        </span>
        <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Discover Your <br/>
          <span class="text-yellow-300">Perfect Style</span>
        </h1>
        <p class="text-lg text-white/80 mb-8 leading-relaxed">
          Explore our curated collection of premium products. From fashion to electronics, find everything you need with exclusive deals.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/src/pages/shop/" class="inline-flex px-8 py-3.5 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg">
            Shop Now
          </a>
          <a href="#featured" class="inline-flex px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200">
            View Collection
          </a>
        </div>
      </div>
    </div>
    <!-- Decorative blobs -->
    <div class="absolute top-10 right-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 right-1/3 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
  `

  return section
}
