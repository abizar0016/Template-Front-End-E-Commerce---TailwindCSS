let state = {
  isMobileMenuOpen: false,
  isCartSidebarOpen: false,
  isSearchOpen: false,
  activeModal: null,
}

const listeners = []

export function onUIChange(fn) {
  listeners.push(fn)
}

function notify() {
  listeners.forEach(fn => fn({ ...state }))
}

export function getUIState() {
  return { ...state }
}

export function toggleMobileMenu() {
  state.isMobileMenuOpen = !state.isMobileMenuOpen
  notify()
}

export function toggleCartSidebar() {
  state.isCartSidebarOpen = !state.isCartSidebarOpen
  notify()
}

export function toggleSearch() {
  state.isSearchOpen = !state.isSearchOpen
  notify()
}

export function openModal(modalId) {
  state.activeModal = modalId
  notify()
}

export function closeModal() {
  state.activeModal = null
  notify()
}
