/**
 * Create the About page body content (values, story, stats, team, quote)
 * @returns {HTMLElement}
 */
export function createAboutContent() {
  const wrapper = document.createElement('div')

  wrapper.innerHTML = `
    <!-- Values Section -->
    <section class="py-14 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center md:text-left">
            <div class="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto md:mx-0 mb-3">
              <i class="fa-solid fa-gem text-lg"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Quality Products</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">We handpick every item to ensure the highest quality.</p>
          </div>
          <div class="text-center md:text-left">
            <div class="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto md:mx-0 mb-3">
              <i class="fa-solid fa-tags text-lg"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Best Prices</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">We offer competitive prices and great value for money.</p>
          </div>
          <div class="text-center md:text-left">
            <div class="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto md:mx-0 mb-3">
              <i class="fa-solid fa-heart text-lg"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Customer First</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Our customers are at the heart of everything we do.</p>
          </div>
          <div class="text-center md:text-left">
            <div class="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mx-auto md:mx-0 mb-3">
              <i class="fa-solid fa-shield-halved text-lg"></i>
            </div>
            <h3 class="font-bold text-gray-900 dark:text-white text-sm mb-1">Secure Shopping</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Your security is our priority. Shop with confidence.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section id="our-story" class="py-16 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop" alt="Venora team"
              class="w-full h-[380px] object-cover rounded-2xl shadow-lg" />
            <div class="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg">
              <div class="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-bag-shopping text-white text-sm"></i>
              </div>
              <span class="font-bold text-gray-900 dark:text-white text-sm">VENORA</span>
            </div>
          </div>
          <div>
            <span class="text-violet-600 dark:text-violet-400 font-bold text-sm tracking-wide">OUR STORY</span>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mt-3 mb-5">A Passion for Quality<br/>and Convenience</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">Venora was founded in 2020 with a simple mission: to bring the best products to customers around the world with a focus on quality, affordability, and excellent service.</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">We started as a small team with a big dream, and today, we're proud to serve thousands of happy customers globally. We're constantly evolving to meet your needs and make your shopping experience better every day.</p>
            <div class="text-2xl italic text-gray-400 dark:text-gray-500" style="font-family: 'Georgia', serif;">David Johnson</div>
            <div class="mt-2">
              <p class="font-semibold text-gray-900 dark:text-white text-sm">David Johnson</p>
              <p class="text-xs text-gray-400 dark:text-gray-500">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="bg-gradient-to-r from-violet-600 to-purple-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-1"><i class="fa-solid fa-users text-white text-lg"></i></div>
            <span class="text-3xl font-extrabold text-white">50K+</span>
            <span class="text-sm text-violet-200">Happy Customers</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-1"><i class="fa-solid fa-box-open text-white text-lg"></i></div>
            <span class="text-3xl font-extrabold text-white">10K+</span>
            <span class="text-sm text-violet-200">Products</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-1"><i class="fa-solid fa-globe text-white text-lg"></i></div>
            <span class="text-3xl font-extrabold text-white">120+</span>
            <span class="text-sm text-violet-200">Countries Served</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-1"><i class="fa-solid fa-star text-white text-lg"></i></div>
            <span class="text-3xl font-extrabold text-white">4.8</span>
            <span class="text-sm text-violet-200">Average Rating</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-violet-600 dark:text-violet-400 font-bold text-sm tracking-wide">OUR TEAM</span>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">Meet the People Behind Venora</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">A dedicated team working hard to make your experience exceptional.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          ${[
            { name: 'David Johnson', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
            { name: 'Sophia Lee', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
            { name: 'Michael Brown', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
            { name: 'Olivia Davis', role: 'Customer Support Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
          ].map(m => `
            <div class="text-center group">
              <div class="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-violet-100 dark:ring-violet-900/30 group-hover:ring-violet-300 dark:group-hover:ring-violet-700 transition-all duration-300">
                <img src="${m.img}" alt="${m.name}" class="w-full h-full object-cover" />
              </div>
              <h4 class="font-bold text-gray-900 dark:text-white text-sm">${m.name}</h4>
              <p class="text-xs text-gray-400 dark:text-gray-500 mb-3">${m.role}</p>
              <div class="flex justify-center gap-3">
                <a href="#" class="text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"><i class="fa-brands fa-linkedin-in text-sm"></i></a>
                <a href="#" class="text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"><i class="fa-brands fa-twitter text-sm"></i></a>
                <a href="#" class="text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"><i class="fa-brands fa-instagram text-sm"></i></a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <i class="fa-solid fa-quote-left text-4xl text-violet-200 dark:text-violet-800 mb-4"></i>
            <p class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-relaxed">We don't just sell products, we build relationships. Your trust inspires us to keep improving every day.</p>
          </div>
          <div class="hidden md:block">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=350&fit=crop" alt="Modern furniture"
              class="w-full h-72 object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  `

  return wrapper
}
