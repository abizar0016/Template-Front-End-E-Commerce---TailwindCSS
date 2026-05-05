/**
 * Debounce a function call
 */
export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Convert text to URL-friendly slug
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()
}

/**
 * Get a query parameter from the current URL
 */
export function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search)
  return params.get(key)
}

/**
 * Create a DOM element with attributes and children
 */
export function createElement(tag, attrs = {}, ...children) {
  const el = document.createElement(tag)
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'className') {
      el.className = value
    } else if (key.startsWith('on')) {
      el.addEventListener(key.slice(2).toLowerCase(), value)
    } else {
      el.setAttribute(key, value)
    }
  }
  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child))
    } else if (child) {
      el.appendChild(child)
    }
  })
  return el
}
