/**
 * VENORA logo link for auth screens (no navbar).
 * @returns {HTMLElement}
 */
export function createAuthBrand() {
  const wrap = document.createElement('a')
  wrap.href = '/'
  wrap.className = 'inline-flex items-center gap-2'
  wrap.innerHTML = `
    <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
      <i class="fa-solid fa-bag-shopping text-white text-sm"></i>
    </div>
    <span class="text-lg font-bold text-gray-900 dark:text-white">VENORA</span>
  `
  return wrap
}
