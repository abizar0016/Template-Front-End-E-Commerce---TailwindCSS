/**
 * Create a reusable page hero banner
 * @param {Object} options
 * @param {string} options.title - Page title
 * @param {string} options.breadcrumb - Breadcrumb label
 * @param {string} options.description - Description text
 * @param {string} [options.label] - Optional label above title (e.g. "ABOUT US")
 * @param {boolean} [options.showImage] - Show decorative image on the right
 * @returns {HTMLElement}
 */
export function createPageHero({ title, breadcrumb, description, label = '', showImage = true }) {
  const section = document.createElement('section')
  section.className = 'bg-gradient-to-r from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-violet-950 border-b border-gray-100 dark:border-gray-800'

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between">
      <div>
        <nav class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <a href="/" class="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</a>
          <i class="fa-solid fa-chevron-right text-[10px]"></i>
          <span class="text-gray-900 dark:text-white font-medium">${breadcrumb}</span>
        </nav>
        ${label ? `<span class="text-violet-600 dark:text-violet-400 font-bold text-sm tracking-wide">${label}</span>` : ''}
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 ${label ? 'mt-2' : ''}">${title}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm">${description}</p>
      </div>
      ${showImage ? `
        <div class="hidden md:block">
          <img src="/images/banners/hero-chair.png" alt="${title}" class="w-40 h-40 object-contain drop-shadow-lg/40"
            onerror="this.style.display='none'" />
        </div>
      ` : ''}
    </div>
  `

  return section
}
