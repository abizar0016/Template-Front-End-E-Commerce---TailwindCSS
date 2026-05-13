/**
 * Create the VENORA hero section matching reference design
 * @returns {HTMLElement}
 */
export function createHero() {
  const section = document.createElement('section')
  section.id = 'hero'
  section.className = 'relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-violet-950 transition-colors duration-300'

  const heroItems = [
    {
      title: "Discover Products<br/>You'll <span class=\"text-violet-600 dark:text-violet-400\">Love</span>",
      image: '/images/banners/hero-chair.png',
      fallback: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=600&fit=crop',
      badgeTop: 'Up to',
      badgeMain: '50%',
      badgeBottom: 'OFF'
    },
    {
      title: "Upgrade Your<br/>Living <span class=\"text-violet-600 dark:text-violet-400\">Space</span>",
      image: '/images/banners/wireless-headphone.png',
      fallback: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=600&fit=crop',
      badgeTop: 'Save',
      badgeMain: '30%',
      badgeBottom: 'NOW'
    },
    {
      title: "Modern Comfort<br/>For <span class=\"text-violet-600 dark:text-violet-400\">Your Home</span>",
      image: '/images/banners/sofa-modern.png',
      fallback: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
      badgeTop: 'NEW',
      badgeMain: 'HOT',
      badgeBottom: 'PICK'
    }
  ]

  let currentIndex = 0

  section.innerHTML = `
    <!-- Decorative blobs -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-violet-200/40 dark:bg-violet-800/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-200/30 dark:bg-purple-800/15 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Left Content -->
        <div class="order-2 md:order-1 relative h-[300px] flex flex-col justify-center">
          <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 mb-6 w-max">
            NEW COLLECTION
          </span>
          
          <h1 id="hero-title" class="text-4xl sm:text-5xl md:text-[56px] font-bold text-gray-900 dark:text-white leading-[1.1] mb-6 transition-opacity duration-300">
            ${heroItems[0].title}
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md">
            High quality products, modern design, and the best experience for you.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/src/pages/shop/" class="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-600/25 text-sm">
              Shop Now
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </a>
            <a href="#featured" class="inline-flex items-center px-7 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:border-violet-600 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400 transition-all duration-200 text-sm">
              Explore Collection
            </a>
          </div>
        </div>

        <!-- Right Image -->
        <div class="order-1 md:order-2 relative flex justify-center items-center">
          <!-- Navigation arrows -->
          <button id="hero-prev" class="absolute left-0 md:-left-4 z-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-violet-600 hover:shadow-xl transition-all cursor-pointer border border-gray-100 dark:border-gray-700">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button id="hero-next" class="absolute right-0 md:-right-4 z-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-violet-600 hover:shadow-xl transition-all cursor-pointer border border-gray-100 dark:border-gray-700">
            <i class="fa-solid fa-chevron-right"></i>
          </button>

          <div class="relative">
            <div class="w-64 h-64 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-b from-violet-100 to-violet-200/50 dark:from-violet-900/30 dark:to-violet-800/20 flex items-center justify-center relative overflow-visible">
              <img id="hero-img" src="${heroItems[0].image}" alt="Featured product"
                class="absolute w-56 sm:w-64 md:w-80 object-contain hover:scale-105 transition-all duration-500 transform drop-shadow-xl/30"
                onerror="this.src='${heroItems[0].fallback}'" />
            </div>
            <!-- Badge -->
            <div class="absolute top-2 right-2 md:top-4 md:right-0 z-20">
              <div class="relative w-[72px] h-[72px]">
                <div class="absolute inset-0 bg-violet-600 rounded-full animate-ping opacity-20"></div>
                <div class="relative w-full h-full bg-violet-600 rounded-full flex flex-col items-center justify-center shadow-lg shadow-violet-600/30 transition-transform duration-300" id="hero-badge">
                  <span id="hero-badge-top" class="text-white text-[10px] font-medium leading-none">${heroItems[0].badgeTop}</span>
                  <span id="hero-badge-main" class="text-white text-lg font-extrabold leading-none">${heroItems[0].badgeMain}</span>
                  <span id="hero-badge-bottom" class="text-white/80 text-[10px] font-semibold">${heroItems[0].badgeBottom}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Dots -->
      <div class="flex justify-center gap-2 mt-10" id="hero-dots">
        ${heroItems.map((_, i) => `
          <button data-index="${i}" class="hero-dot ${i === 0 ? 'w-8 bg-violet-600' : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-violet-400'} h-2 rounded-full cursor-pointer transition-all duration-300"></button>
        `).join('')}
      </div>
    </div>
  `

  // Interactivity logic
  const titleEl = section.querySelector('#hero-title')
  const imgEl = section.querySelector('#hero-img')
  const badgeTopEl = section.querySelector('#hero-badge-top')
  const badgeMainEl = section.querySelector('#hero-badge-main')
  const badgeBottomEl = section.querySelector('#hero-badge-bottom')
  const badgeEl = section.querySelector('#hero-badge')
  const dots = section.querySelectorAll('.hero-dot')

  function updateSlide(index) {
    currentIndex = (index + heroItems.length) % heroItems.length
    const item = heroItems[currentIndex]

    // Fade out
    titleEl.style.opacity = '0'
    imgEl.style.opacity = '0'
    imgEl.style.transform = 'scale(0.95)'
    badgeEl.style.transform = 'scale(0.8)'
    badgeEl.style.opacity = '0'

    setTimeout(() => {
      // Update content
      titleEl.innerHTML = item.title
      imgEl.src = item.image
      imgEl.onerror = () => { imgEl.src = item.fallback }
      badgeTopEl.textContent = item.badgeTop
      badgeMainEl.textContent = item.badgeMain
      badgeBottomEl.textContent = item.badgeBottom

      // Update dots
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.className = 'hero-dot w-8 h-2 rounded-full bg-violet-600 cursor-pointer transition-all duration-300'
        } else {
          dot.className = 'hero-dot w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-violet-400 cursor-pointer transition-all duration-300'
        }
      })

      // Fade in
      titleEl.style.opacity = '1'
      imgEl.style.opacity = '1'
      imgEl.style.transform = 'scale(1)'
      badgeEl.style.transform = 'scale(1)'
      badgeEl.style.opacity = '1'
    }, 300)
  }

  section.querySelector('#hero-prev').addEventListener('click', () => updateSlide(currentIndex - 1))
  section.querySelector('#hero-next').addEventListener('click', () => updateSlide(currentIndex + 1))
  
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      updateSlide(parseInt(e.target.dataset.index))
    })
  })

  // Auto advance
  let autoAdvance = setInterval(() => updateSlide(currentIndex + 1), 5000)
  
  // Pause on hover
  section.addEventListener('mouseenter', () => clearInterval(autoAdvance))
  section.addEventListener('mouseleave', () => {
    autoAdvance = setInterval(() => updateSlide(currentIndex + 1), 5000)
  })

  return section
}
