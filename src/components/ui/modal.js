/**
 * Create a modal
 * @param {Object} options
 * @param {string} options.id
 * @param {string} options.title
 * @param {HTMLElement|string} options.content
 * @param {Function} [options.onClose]
 * @returns {HTMLElement}
 */
export function createModal({ id, title, content, onClose }) {
  const overlay = document.createElement('div')
  overlay.id = id
  overlay.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300'

  const modal = document.createElement('div')
  modal.className = 'bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-6 transform scale-95 transition-transform duration-300'

  // Header
  const header = document.createElement('div')
  header.className = 'flex items-center justify-between mb-4'

  const titleEl = document.createElement('h3')
  titleEl.className = 'text-lg font-semibold text-gray-900'
  titleEl.textContent = title

  const closeBtn = document.createElement('button')
  closeBtn.className = 'text-gray-400 hover:text-gray-600 transition-colors cursor-pointer'
  closeBtn.innerHTML = '&times;'
  closeBtn.style.fontSize = '24px'
  closeBtn.addEventListener('click', () => {
    hideModal(id)
    if (onClose) onClose()
  })

  header.append(titleEl, closeBtn)

  // Body
  const body = document.createElement('div')
  if (typeof content === 'string') {
    body.innerHTML = content
  } else if (content) {
    body.appendChild(content)
  }

  modal.append(header, body)
  overlay.appendChild(modal)

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      hideModal(id)
      if (onClose) onClose()
    }
  })

  return overlay
}

export function showModal(id) {
  const modal = document.getElementById(id)
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none')
    modal.classList.add('opacity-100', 'pointer-events-auto')
    modal.querySelector('div').classList.remove('scale-95')
    modal.querySelector('div').classList.add('scale-100')
  }
}

export function hideModal(id) {
  const modal = document.getElementById(id)
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none')
    modal.classList.remove('opacity-100', 'pointer-events-auto')
    modal.querySelector('div').classList.add('scale-95')
    modal.querySelector('div').classList.remove('scale-100')
  }
}
