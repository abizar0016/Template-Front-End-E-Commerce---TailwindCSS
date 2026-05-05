/**
 * Create the newsletter section
 * @returns {HTMLElement}
 */
export function createNewsletter() {
  const section = document.createElement('section')
  section.className = 'py-16 bg-gray-50'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Stay in the Loop</h2>
      <p class="text-gray-500 mb-8 max-w-md mx-auto">Subscribe to our newsletter and get 10% off your first order plus exclusive access to new arrivals.</p>
      <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault()">
        <input type="email" placeholder="Enter your email"
          class="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
        <button type="submit"
          class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer">
          Subscribe
        </button>
      </form>
    </div>
  `

  return section
}
