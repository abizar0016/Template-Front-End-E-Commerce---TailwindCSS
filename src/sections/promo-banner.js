/**
 * Create the promo banner section
 * @returns {HTMLElement}
 */
export function createPromoBanner() {
  const section = document.createElement('section')
  section.className = 'py-16'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 p-8 md:p-16">
        <div class="relative z-10 max-w-lg">
          <span class="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full mb-4">LIMITED TIME</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Up to 50% Off<br/>Summer Collection
          </h2>
          <p class="text-white/80 mb-6">Don't miss out on our biggest sale of the season. Premium quality at unbeatable prices.</p>
          <a href="/src/pages/shop/" class="inline-flex px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Shop the Sale
          </a>
        </div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  `

  return section
}
