/**
 * Create a button element (VENORA style)
 * @param {Object} options
 * @param {string} options.text
 * @param {string} [options.variant='primary'] - 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} [options.size='md'] - 'sm' | 'md' | 'lg'
 * @param {Function} [options.onClick]
 * @param {string} [options.className]
 * @param {string} [options.icon] - HTML string for icon
 * @returns {HTMLButtonElement}
 */
export function createButton({ text, variant = 'primary', size = 'md', onClick, className = '', icon = '' }) {
  const btn = document.createElement('button')

  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 shadow-lg shadow-violet-600/25',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
    outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-violet-600 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400',
    ghost: 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  btn.className = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`.trim()
  btn.innerHTML = `${text}${icon}`

  if (onClick) btn.addEventListener('click', onClick)

  return btn
}
