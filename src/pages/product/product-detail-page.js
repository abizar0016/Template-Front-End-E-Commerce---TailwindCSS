import { formatCurrency } from '../../utils/formatCurrency.js'
import { addToCart } from '../../store/cartStore.js'

/**
 * Product detail main column (gallery + info + actions). Use with navbar/footer from layout.
 * @param {Object} product
 * @returns {HTMLElement}
 */
export function createProductDetailMain(product) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  const main = document.createElement('main')
  main.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'

  main.innerHTML = `
    <nav class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
      <a href="/" class="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</a>
      <i class="fa-solid fa-chevron-right text-[10px] opacity-60"></i>
      <a href="/src/pages/shop/" class="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Shop</a>
      <i class="fa-solid fa-chevron-right text-[10px] opacity-60"></i>
      <span class="text-gray-900 dark:text-white font-medium">${product.name}</span>
    </nav>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
      <div class="space-y-4">
        <div class="aspect-square bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center p-8 overflow-hidden">
          <img id="main-image" src="${product.image}" alt="${product.name}"
            class="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            onerror="this.src='https://placehold.co/500x500/f5f3ff/7c3aed?text=${encodeURIComponent(product.name)}'" />
        </div>
        <div class="flex gap-3">
          <button type="button" class="thumb-btn w-20 h-20 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-violet-500 p-2 cursor-pointer" aria-label="View image 1">
            <img src="${product.image}" alt="" class="w-full h-full object-contain"
              onerror="this.src='https://placehold.co/80x80/f5f3ff/7c3aed?text=1'" />
          </button>
          <button type="button" class="thumb-btn w-20 h-20 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-violet-300 p-2 cursor-pointer opacity-80" aria-label="View image 2">
            <img src="${product.image}" alt="" class="w-full h-full object-contain"
              onerror="this.src='https://placehold.co/80x80/f5f3ff/7c3aed?text=2'" />
          </button>
          <button type="button" class="thumb-btn w-20 h-20 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-violet-300 p-2 cursor-pointer opacity-80" aria-label="View image 3">
            <img src="${product.image}" alt="" class="w-full h-full object-contain"
              onerror="this.src='https://placehold.co/80x80/f5f3ff/7c3aed?text=3'" />
          </button>
        </div>
      </div>

      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">${product.name}</h1>

        <div class="flex items-baseline gap-3 mb-4">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${formatCurrency(product.price)}</span>
          ${product.originalPrice ? `<span class="text-lg text-gray-400 line-through">${formatCurrency(product.originalPrice)}</span>` : ''}
          ${discount ? `<span class="text-sm font-bold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">-${discount}%</span>` : ''}
        </div>

        <div class="flex items-center gap-2 mb-6">
          <div class="flex text-yellow-400">
            ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span class="text-sm text-gray-500 dark:text-gray-400">(${product.reviews} reviews)</span>
        </div>

        <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">${product.description}</p>

        <div class="mb-6">
          <p class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Color:</p>
          <div class="flex gap-2.5" id="color-options">
            ${(product.colors || [])
              .map(
                (c, i) => `
              <button type="button" class="color-opt w-9 h-9 rounded-full cursor-pointer transition-all ${i === 0 ? 'ring-2 ring-violet-500 ring-offset-2 dark:ring-offset-gray-950' : 'ring-2 ring-transparent hover:ring-gray-300'}" style="background-color: ${c}" aria-label="Color option"></button>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="mb-8">
          <p class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Quantity:</p>
          <div class="inline-flex items-center border border-gray-200 dark:border-gray-700 rounded-xl">
            <button type="button" id="qty-dec" class="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors cursor-pointer" aria-label="Decrease quantity">
              <i class="fa-solid fa-minus text-xs"></i>
            </button>
            <span id="qty-value" class="w-10 text-center font-semibold text-gray-900 dark:text-white">1</span>
            <button type="button" id="qty-inc" class="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-violet-600 transition-colors cursor-pointer" aria-label="Increase quantity">
              <i class="fa-solid fa-plus text-xs"></i>
            </button>
          </div>
        </div>

        <div class="flex gap-3 mb-8">
          <button type="button" id="add-to-cart" class="flex-1 py-3.5 border-2 border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-400 font-semibold rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors cursor-pointer">
            Add to Cart
          </button>
          <button type="button" id="buy-now" class="flex-1 py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors cursor-pointer shadow-lg shadow-violet-600/25">
            Buy Now
          </button>
        </div>

        <div class="flex flex-wrap gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <i class="fa-solid fa-truck text-violet-500"></i>
            <div>
              <p class="font-medium text-gray-700 dark:text-gray-300">Free Shipping</p>
              <p class="text-xs">On orders over $100</p>
            </div>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <i class="fa-solid fa-rotate-left text-violet-500"></i>
            <div>
              <p class="font-medium text-gray-700 dark:text-gray-300">30 Days Return</p>
              <p class="text-xs">Easy returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  let qty = 1
  const qtyVal = main.querySelector('#qty-value')
  main.querySelector('#qty-dec')?.addEventListener('click', () => {
    if (qty > 1) {
      qty--
      qtyVal.textContent = String(qty)
    }
  })
  main.querySelector('#qty-inc')?.addEventListener('click', () => {
    qty++
    qtyVal.textContent = String(qty)
  })

  const addBtn = main.querySelector('#add-to-cart')
  addBtn?.addEventListener('click', () => {
    addToCart(product, qty)
    addBtn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Added!'
    setTimeout(() => {
      addBtn.textContent = 'Add to Cart'
    }, 2000)
  })

  main.querySelector('#buy-now')?.addEventListener('click', () => {
    addToCart(product, qty)
    window.location.href = '/src/pages/cart/'
  })

  main.querySelectorAll('.color-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      main.querySelectorAll('.color-opt').forEach(b => {
        b.classList.remove('ring-violet-500', 'ring-offset-2', 'dark:ring-offset-gray-950')
        b.classList.add('ring-transparent', 'hover:ring-gray-300')
      })
      btn.classList.remove('ring-transparent', 'hover:ring-gray-300')
      btn.classList.add('ring-2', 'ring-violet-500', 'ring-offset-2', 'dark:ring-offset-gray-950')
    })
  })

  const mainImg = main.querySelector('#main-image')
  main.querySelectorAll('.thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img')
      if (img && mainImg) mainImg.src = img.src
      main.querySelectorAll('.thumb-btn').forEach(b => {
        b.classList.remove('border-violet-500', 'opacity-100')
        b.classList.add('border-transparent', 'opacity-80')
      })
      btn.classList.remove('border-transparent', 'opacity-80')
      btn.classList.add('border-violet-500', 'opacity-100')
    })
  })

  return main
}
