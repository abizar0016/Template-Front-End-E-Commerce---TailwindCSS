/**
 * Create a button element
 * @param {Object} options
 * @param {string} options.text - Button text
 * @param {string} [options.variant='primary'] - 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} [options.size='md'] - 'sm' | 'md' | 'lg'
 * @param {Function} [options.onClick] - Click handler
 * @param {string} [options.className] - Additional classes
 * @returns {HTMLButtonElement}
 */
export function createButton({ text, variant = 'primary', size = 'md', onClick, className = '' }) {
  const btn = document.createElement('button')

  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100',
    ghost: 'text-gray-600 hover:bg-gray-100 active:bg-gray-200',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  btn.className = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`.trim()
  btn.textContent = text

  if (onClick) btn.addEventListener('click', onClick)

  return btn
}
