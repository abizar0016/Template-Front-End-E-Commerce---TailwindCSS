/**
 * Create the VENORA newsletter section matching reference design (light box)
 * @returns {HTMLElement}
 */
export function createNewsletter() {
  const section = document.createElement('section')
  section.className = 'py-12 bg-white dark:bg-gray-950 transition-colors duration-300'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gray-50 dark:bg-gray-900 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex items-center gap-5">
          <div class="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center shrink-0">
            <i class="fa-regular fa-envelope text-violet-600 dark:text-violet-400 text-xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Subscribe to Our Newsletter</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Get the latest updates on new products and upcoming sales</p>
          </div>
        </div>
        <form class="flex w-full md:w-auto gap-3" onsubmit="event.preventDefault()">
          <input type="email" placeholder="Enter your email address"
            class="flex-1 md:w-[320px] px-6 py-3.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
          <button type="submit"
            class="px-8 py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors text-sm cursor-pointer whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  `

  return section
}
