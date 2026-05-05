/**
 * Create the VENORA newsletter section (dark style with mail icon)
 * @returns {HTMLElement}
 */
export function createNewsletter() {
  const section = document.createElement('section')
  section.className = 'py-12 bg-gray-900 dark:bg-black transition-colors duration-300'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center shrink-0">
            <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-white">Subscribe to Our Newsletter</h3>
            <p class="text-sm text-gray-400">Get the latest updates on new products and upcoming sales</p>
          </div>
        </div>
        <form class="flex w-full md:w-auto gap-2" onsubmit="event.preventDefault()">
          <input type="email" placeholder="Enter your email address"
            class="flex-1 md:w-72 px-5 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
          <button type="submit"
            class="px-6 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors text-sm cursor-pointer shadow-lg shadow-violet-600/25 whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  `

  return section
}
