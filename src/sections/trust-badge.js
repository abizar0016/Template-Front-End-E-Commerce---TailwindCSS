/**
 * Create the VENORA trust badge section (card style with shadows)
 * @returns {HTMLElement}
 */
export function createTrustBadge() {
  const section = document.createElement('section')
  section.className = 'py-8 bg-white dark:bg-gray-950 transition-colors duration-300'

  const badges = [
    {
      title: 'Free Shipping',
      desc: 'On orders over $100',
      icon: `<i class="fa-solid fa-truck-fast text-xl"></i>`,
    },
    {
      title: 'Secure Payment',
      desc: '100% secure payment',
      icon: `<i class="fa-solid fa-shield-halved text-xl"></i>`,
    },
    {
      title: '30 Days Return',
      desc: 'Easy returns',
      icon: `<i class="fa-solid fa-arrow-rotate-left text-xl"></i>`,
    },
    {
      title: '24/7 Support',
      desc: 'Dedicated support',
      icon: `<i class="fa-solid fa-headset text-xl"></i>`,
    },
  ]

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        ${badges.map(b => `
          <div class="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-50 dark:border-gray-700">
            <div class="w-11 h-11 rounded-full bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
              ${b.icon}
            </div>
            <div>
              <p class="text-sm font-semibold text-gray-900 dark:text-white">${b.title}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">${b.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `

  return section
}
