import { createNavbar } from '../../components/layout/navbar.js'
import { createFooter } from '../../components/layout/footer.js'
import { createPageHero } from '../../components/layout/page-hero.js'
import { createProductCard } from '../../components/product/product-card.js'
import { createTrustBadge } from '../../sections/trust-badge.js'
import { products } from '../../data/products.js'
import { categories } from '../../data/categories.js'

/**
 * Shop listing page: filters, grid, pagination (mounts into #app).
 * @param {HTMLElement} app
 */
export function mountShopPage(app) {
  // ── State ──
  let currentCategory = 'all'
  let currentSort = 'featured'
  let currentPage = 1
  let perPage = 12
  let priceRange = [0, 1000]
  let selectedColors = []
  let selectedRating = 0
  let selectedBrands = []
  let searchQuery = ''
  let viewMode = 'grid' // 'grid' | 'list'

  const allBrands = [...new Set(products.map(p => p.brand))].sort()
  const uniqueColors = ['#1F2937', '#7C3AED', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#D1D5DB', '#F5F5F4']

  // ── Filter logic ──
  function getFilteredProducts() {
        let filtered = [...products]

        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase()
          filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
          )
        }

        // Category
        if (currentCategory !== 'all') {
          filtered = filtered.filter(p => p.category === currentCategory)
        }

        // Price
        filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

        // Colors
        if (selectedColors.length > 0) {
          filtered = filtered.filter(p => p.colors && p.colors.some(c => selectedColors.includes(c)))
        }

        // Rating
        if (selectedRating > 0) {
          filtered = filtered.filter(p => Math.floor(p.rating) >= selectedRating)
        }

        // Brands
        if (selectedBrands.length > 0) {
          filtered = filtered.filter(p => selectedBrands.includes(p.brand))
        }

        // Sort
        switch (currentSort) {
          case 'price-low':
            filtered.sort((a, b) => a.price - b.price)
            break
          case 'price-high':
            filtered.sort((a, b) => b.price - a.price)
            break
          case 'newest':
            filtered.sort((a, b) => b.id - a.id)
            break
          case 'rating':
            filtered.sort((a, b) => b.rating - a.rating)
            break
          default:
            break
        }

        return filtered
      }

      function getPaginatedProducts() {
        const filtered = getFilteredProducts()
        const start = (currentPage - 1) * perPage
        return {
          items: filtered.slice(start, start + perPage),
          total: filtered.length,
          totalPages: Math.ceil(filtered.length / perPage)
        }
      }

      // ── Render ──
      function render() {
        const { items, total, totalPages } = getPaginatedProducts()
        const startItem = (currentPage - 1) * perPage + 1
        const endItem = Math.min(currentPage * perPage, total)

        // ── Shop Hero Banner ──
        const heroBanner = createPageHero({ title: 'Shop', breadcrumb: 'Shop', description: 'Discover our amazing collection of products.' })

        // ── Main Content ──
        const content = document.createElement('div')
        content.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'
        content.innerHTML = `
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Sidebar -->
            <aside class="w-full lg:w-[260px] shrink-0 space-y-6">
              <!-- Categories -->
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-4 text-sm">Categories</h3>
                <ul class="space-y-1" id="category-filter">
                  <li>
                    <button data-cat="all" class="cat-btn flex items-center justify-between w-full text-sm py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${currentCategory === 'all' ? 'text-violet-600 dark:text-violet-400 font-semibold bg-violet-50 dark:bg-violet-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'}">
                      <span>All Categories</span>
                      <span class="text-xs text-gray-400">${products.length}</span>
                    </button>
                  </li>
                  ${categories.map(cat => `
                    <li>
                      <button data-cat="${cat.name}" class="cat-btn flex items-center justify-between w-full text-sm py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${currentCategory === cat.name ? 'text-violet-600 dark:text-violet-400 font-semibold bg-violet-50 dark:bg-violet-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'}">
                        <span>${cat.name}</span>
                        <span class="text-xs text-gray-400">${products.filter(p => p.category === cat.name).length}</span>
                      </button>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Price Range -->
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-4 text-sm">Price Range</h3>
                <div class="space-y-3">
                  <input id="price-slider" type="range" min="0" max="1000" value="${priceRange[1]}" class="w-full accent-violet-600 cursor-pointer" />
                  <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
                    <span>$0</span>
                    <span id="price-max-label">$${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <!-- Colors -->
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-4 text-sm">Colors</h3>
                <div class="flex flex-wrap gap-2" id="color-filter">
                  ${uniqueColors.map(c => `
                    <button data-color="${c}" class="color-btn w-7 h-7 rounded-full border-2 ${selectedColors.includes(c) ? 'border-violet-500 ring-2 ring-violet-200 dark:ring-violet-800' : 'border-gray-200 dark:border-gray-600 hover:border-violet-400'} transition-all cursor-pointer" style="background-color: ${c}"></button>
                  `).join('')}
                </div>
              </div>

              <!-- Rating -->
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-4 text-sm">Rating</h3>
                <div class="space-y-1.5" id="rating-filter">
                  ${[5, 4, 3, 2, 1].map(r => {
                    const count = products.filter(p => Math.floor(p.rating) >= r).length
                    return `
                      <button data-rating="${r}" class="rating-btn flex items-center gap-2 w-full py-1 px-2 rounded-lg text-sm cursor-pointer transition-colors ${selectedRating === r ? 'bg-violet-50 dark:bg-violet-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}">
                        <div class="flex text-yellow-400 text-xs">${'<i class="fa-solid fa-star"></i>'.repeat(r)}${'<i class="fa-regular fa-star text-gray-300 dark:text-gray-600"></i>'.repeat(5 - r)}</div>
                        <span class="text-xs text-gray-400">(${count})</span>
                      </button>
                    `
                  }).join('')}
                </div>
              </div>

              <!-- Brands -->
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-4 text-sm">Brands</h3>
                <div class="space-y-2" id="brand-filter">
                  <label class="flex items-center justify-between cursor-pointer group">
                    <div class="flex items-center gap-2">
                      <input type="checkbox" class="brand-cb w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer" value="all" ${selectedBrands.length === 0 ? 'checked' : ''} />
                      <span class="text-sm text-gray-600 dark:text-gray-300 group-hover:text-violet-600">All Brands</span>
                    </div>
                  </label>
                  ${allBrands.map(brand => {
                    const count = products.filter(p => p.brand === brand).length
                    return `
                      <label class="flex items-center justify-between cursor-pointer group">
                        <div class="flex items-center gap-2">
                          <input type="checkbox" class="brand-cb w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer" value="${brand}" ${selectedBrands.includes(brand) ? 'checked' : ''} />
                          <span class="text-sm text-gray-600 dark:text-gray-300 group-hover:text-violet-600">${brand}</span>
                        </div>
                        <span class="text-xs text-gray-400">(${count})</span>
                      </label>
                    `
                  }).join('')}
                </div>
              </div>

              <!-- Summer Sale Promo -->
              <div class="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden">
                <div class="absolute -bottom-4 -right-4 w-28 h-28 bg-white/10 rounded-full"></div>
                <span class="text-xs font-semibold text-violet-200">Summer Sale</span>
                <h4 class="text-xl font-bold mt-1 leading-tight">Up to 50% Off</h4>
                <p class="text-sm font-semibold mt-0.5">For All Products</p>
                <a href="#" class="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-white text-violet-700 text-xs font-bold rounded-full hover:bg-violet-50 transition-colors">
                  Shop Now <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </aside>

            <!-- Main Products Area -->
            <div class="flex-1 min-w-0">
              <!-- Top Bar -->
              <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Showing <span class="font-medium text-gray-700 dark:text-gray-200">${total > 0 ? startItem : 0}-${endItem}</span> of <span class="font-medium text-gray-700 dark:text-gray-200">${total}</span> results
                </p>
                <div class="flex items-center gap-3">
                  <!-- Sort -->
                  <div class="flex items-center gap-2">
                    <label class="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">Sort by:</label>
                    <select id="sort-select" class="text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer">
                      <option value="featured" ${currentSort === 'featured' ? 'selected' : ''}>Featured</option>
                      <option value="price-low" ${currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                      <option value="price-high" ${currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                      <option value="newest" ${currentSort === 'newest' ? 'selected' : ''}>Newest</option>
                      <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>Top Rated</option>
                    </select>
                  </div>
                  <!-- Show -->
                  <div class="flex items-center gap-2 hidden sm:flex">
                    <label class="text-sm text-gray-500 dark:text-gray-400">Show:</label>
                    <select id="perpage-select" class="text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer">
                      <option value="12" ${perPage === 12 ? 'selected' : ''}>12</option>
                      <option value="24" ${perPage === 24 ? 'selected' : ''}>24</option>
                      <option value="48" ${perPage === 48 ? 'selected' : ''}>48</option>
                    </select>
                  </div>
                  <!-- View toggle -->
                  <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <button id="view-grid" class="view-btn p-2 ${viewMode === 'grid' ? 'bg-violet-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-400 hover:text-violet-600'} transition-colors cursor-pointer">
                      <i class="fa-solid fa-grid-2 text-sm"></i>
                    </button>
                    <button id="view-list" class="view-btn p-2 ${viewMode === 'list' ? 'bg-violet-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-400 hover:text-violet-600'} transition-colors cursor-pointer">
                      <i class="fa-solid fa-list text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Product Grid -->
              <div id="product-grid" class="${viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5' : 'flex flex-col gap-4'}">
              </div>

              <!-- No results -->
              ${total === 0 ? `
                <div class="text-center py-20">
                  <i class="fa-solid fa-box-open text-5xl text-gray-300 dark:text-gray-600 mb-4"></i>
                  <p class="text-lg font-semibold text-gray-500 dark:text-gray-400">No products found</p>
                  <p class="text-sm text-gray-400 dark:text-gray-500 mt-1">Try adjusting your filters</p>
                </div>
              ` : ''}

              <!-- Pagination -->
              ${totalPages > 1 ? `
                <div class="flex items-center justify-center gap-1.5 mt-10" id="pagination">
                  <button data-page="prev" class="page-btn w-9 h-9 rounded-lg flex items-center justify-center text-sm ${currentPage === 1 ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-gray-500 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 cursor-pointer'} border border-gray-200 dark:border-gray-700 transition-colors">
                    <i class="fa-solid fa-chevron-left text-xs"></i>
                  </button>
                  ${generatePaginationButtons(currentPage, totalPages)}
                  <button data-page="next" class="page-btn w-9 h-9 rounded-lg flex items-center justify-center text-sm ${currentPage === totalPages ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'text-gray-500 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 cursor-pointer'} border border-gray-200 dark:border-gray-700 transition-colors">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                  </button>
                </div>
              ` : ''}
            </div>
          </div>
        `

        // Populate product grid
        const grid = content.querySelector('#product-grid')
        items.forEach(p => grid.appendChild(createProductCard(p)))

        // Build page
        app.innerHTML = ''
        app.append(createNavbar(), heroBanner, content, createTrustBadge(), createFooter())

        // ── Attach Events ──
        attachEvents()
      }

      function generatePaginationButtons(current, total) {
        let pages = []
        if (total <= 7) {
          for (let i = 1; i <= total; i++) pages.push(i)
        } else {
          pages = [1, 2, 3]
          if (current > 4) pages = [1, '...', current - 1, current, current + 1]
          if (current <= 4) pages = [1, 2, 3, 4]
          if (current < total - 3) pages.push('...', total)
          else pages.push(total - 2, total - 1, total)
          pages = [...new Set(pages)]
        }
        return pages.map(p => {
          if (p === '...') return `<span class="w-9 h-9 flex items-center justify-center text-sm text-gray-400">...</span>`
          return `<button data-page="${p}" class="page-btn w-9 h-9 rounded-lg flex items-center justify-center text-sm font-medium ${p === current ? 'bg-violet-600 text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 border border-gray-200 dark:border-gray-700'} transition-colors cursor-pointer">${p}</button>`
        }).join('')
      }

      function attachEvents() {
        // Category filter
        app.querySelectorAll('.cat-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            currentCategory = btn.dataset.cat
            currentPage = 1
            render()
          })
        })

        // Price slider
        const priceSlider = app.querySelector('#price-slider')
        const priceLabel = app.querySelector('#price-max-label')
        if (priceSlider) {
          priceSlider.addEventListener('input', (e) => {
            priceRange[1] = parseInt(e.target.value)
            priceLabel.textContent = '$' + priceRange[1]
          })
          priceSlider.addEventListener('change', () => {
            currentPage = 1
            render()
          })
        }

        // Color filter
        app.querySelectorAll('.color-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const color = btn.dataset.color
            if (selectedColors.includes(color)) {
              selectedColors = selectedColors.filter(c => c !== color)
            } else {
              selectedColors.push(color)
            }
            currentPage = 1
            render()
          })
        })

        // Rating filter
        app.querySelectorAll('.rating-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const r = parseInt(btn.dataset.rating)
            selectedRating = selectedRating === r ? 0 : r
            currentPage = 1
            render()
          })
        })

        // Brand filter
        app.querySelectorAll('.brand-cb').forEach(cb => {
          cb.addEventListener('change', () => {
            if (cb.value === 'all') {
              selectedBrands = []
            } else {
              if (cb.checked) {
                selectedBrands.push(cb.value)
              } else {
                selectedBrands = selectedBrands.filter(b => b !== cb.value)
              }
            }
            currentPage = 1
            render()
          })
        })

        // Sort
        const sortSelect = app.querySelector('#sort-select')
        if (sortSelect) {
          sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value
            currentPage = 1
            render()
          })
        }

        // Per page
        const ppSelect = app.querySelector('#perpage-select')
        if (ppSelect) {
          ppSelect.addEventListener('change', (e) => {
            perPage = parseInt(e.target.value)
            currentPage = 1
            render()
          })
        }

        // View toggle
        app.querySelector('#view-grid')?.addEventListener('click', () => {
          viewMode = 'grid'
          render()
        })
        app.querySelector('#view-list')?.addEventListener('click', () => {
          viewMode = 'list'
          render()
        })

        // Pagination
        app.querySelectorAll('.page-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const { items, total, totalPages } = getPaginatedProducts()
            const page = btn.dataset.page
            if (page === 'prev' && currentPage > 1) {
              currentPage--
              render()
            } else if (page === 'next' && currentPage < totalPages) {
              currentPage++
              render()
            } else if (page !== 'prev' && page !== 'next') {
              currentPage = parseInt(page)
              render()
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
          })
        })

        // Search from navbar
        const searchInputs = app.querySelectorAll('input[placeholder*="Search"]')
        searchInputs.forEach(input => {
          input.addEventListener('input', (e) => {
            searchQuery = e.target.value
            currentPage = 1
            // Debounce
            clearTimeout(input._debounce)
            input._debounce = setTimeout(() => render(), 300)
          })
          // Sync value
          if (searchQuery) input.value = searchQuery
        })
      }

      // ── Initial Render ──
      // Check URL params for initial category
      const urlParams = new URLSearchParams(window.location.search)
      const catParam = urlParams.get('category')
      if (catParam) {
        const matchedCat = categories.find(c => c.slug === catParam)
        if (matchedCat) currentCategory = matchedCat.name
      }

      render()
}
