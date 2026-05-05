/**
 * Create an input element
 * @param {Object} options
 * @param {string} [options.type='text']
 * @param {string} [options.placeholder]
 * @param {string} [options.label]
 * @param {string} [options.id]
 * @param {string} [options.className]
 * @returns {HTMLElement}
 */
export function createInput({ type = 'text', placeholder = '', label = '', id = '', className = '' }) {
  const wrapper = document.createElement('div')
  wrapper.className = 'flex flex-col gap-1.5'

  if (label) {
    const lbl = document.createElement('label')
    lbl.className = 'text-sm font-medium text-gray-700'
    lbl.textContent = label
    if (id) lbl.setAttribute('for', id)
    wrapper.appendChild(lbl)
  }

  const input = document.createElement('input')
  input.type = type
  input.placeholder = placeholder
  if (id) input.id = id
  input.className = `w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${className}`.trim()

  wrapper.appendChild(input)
  return wrapper
}
