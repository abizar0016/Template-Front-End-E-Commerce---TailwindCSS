/**
 * Create the trust badge section
 * @returns {HTMLElement}
 */
export function createTrustBadge() {
  const section = document.createElement('section')
  section.className = 'bg-white border-b border-gray-100'

  const badges = [
    { icon: '🚚', title: 'Free Shipping', desc: 'On orders over Rp500K' },
    { icon: '🔒', title: 'Secure Payment', desc: '100% protected' },
    { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
    { icon: '💬', title: '24/7 Support', desc: 'Dedicated support' },
  ]

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        ${badges.map(b => `
          <div class="flex items-center gap-3">
            <span class="text-2xl">${b.icon}</span>
            <div>
              <p class="text-sm font-semibold text-gray-900">${b.title}</p>
              <p class="text-xs text-gray-500">${b.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `

  return section
}
