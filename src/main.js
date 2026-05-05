import './styles/main.css'

// ── Theme (Dark / Light) ──
const THEME_KEY = 'venora_theme'

export function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'light'
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme)
  applyTheme(theme)
}

export function toggleTheme() {
  const next = getTheme() === 'light' ? 'dark' : 'light'
  setTheme(next)
  return next
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

// Apply on load
applyTheme(getTheme())
