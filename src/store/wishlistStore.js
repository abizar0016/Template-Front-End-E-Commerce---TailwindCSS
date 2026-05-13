const WISHLIST_KEY = 'ecommerce_wishlist'

function loadWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []
  } catch {
    return []
  }
}

function saveWishlist(items) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items))
}

let wishlistItems = loadWishlist()
const listeners = []

export function onWishlistChange(fn) {
  listeners.push(fn)
}

function notify() {
  listeners.forEach(fn => fn(wishlistItems))
}

export function getWishlist() {
  return [...wishlistItems]
}

export function getWishlistCount() {
  return wishlistItems.length
}

export function isInWishlist(productId) {
  return wishlistItems.some(item => item.id === productId)
}

export function toggleWishlist(product) {
  const existingIndex = wishlistItems.findIndex(item => item.id === product.id)
  if (existingIndex >= 0) {
    wishlistItems.splice(existingIndex, 1) // Remove if exists
  } else {
    wishlistItems.push(product) // Add if not
  }
  saveWishlist(wishlistItems)
  notify()
}

export function removeFromWishlist(productId) {
  wishlistItems = wishlistItems.filter(item => item.id !== productId)
  saveWishlist(wishlistItems)
  notify()
}
