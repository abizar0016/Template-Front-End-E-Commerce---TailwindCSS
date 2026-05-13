/**
 * Create the VENORA customer testimonials section matching reference
 * @returns {HTMLElement}
 */
export function createTestimonials() {
  const section = document.createElement('section')
  section.className = 'py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300'

  const testimonials = [
    {
      text: '"Amazing quality and fast shipping! The product exceeded my expectations. Highly recommended!"',
      name: 'Sarah Johnson',
      role: 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    },
    {
      text: '"Great customer service and beautiful products. Will definitely shop here again. Love it!"',
      name: 'Michael Chen',
      role: 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    },
    {
      text: '"Everything was perfect from ordering to delivery. The quality is outstanding!"',
      name: 'Emily Davis',
      role: 'Verified Buyer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    },
  ]

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">What Our Customers Say</h2>
        <p class="mt-2 text-gray-500 dark:text-gray-400">Join thousands of happy customers</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${testimonials.map(t => `
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <!-- Stars -->
            <div class="flex text-yellow-400 text-sm mb-4 gap-0.5">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <!-- Quote -->
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">${t.text}</p>
            <!-- Author -->
            <div class="flex items-center gap-3">
              <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover ring-2 ring-violet-100 dark:ring-violet-900/50"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="w-10 h-10 bg-violet-500 rounded-full items-center justify-center text-white text-sm font-bold hidden">${t.name.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-white text-sm">${t.name}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500">${t.role}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <!-- Dots -->
      <div class="flex justify-center gap-2 mt-8">
        <button class="w-8 h-2 rounded-full bg-violet-600 cursor-pointer transition-all duration-300"></button>
        <button class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer transition-all duration-300"></button>
        <button class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer transition-all duration-300"></button>
      </div>
    </div>
  `

  return section
}
