const CART_KEY = 'ecommerce_cart'

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || []
  } catch {
    return []
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

let cartItems = loadCart()
const listeners = []

export function onCartChange(fn) {
  listeners.push(fn)
}

function notify() {
  listeners.forEach(fn => fn(cartItems))
}

export function getCart() {
  return [...cartItems]
}

export function getCartCount() {
  return cartItems.reduce((sum, item) => sum + item.qty, 0)
}

export function getCartTotal() {
  return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
}

export function addToCart(product, qty = 1) {
  const existing = cartItems.find(item => item.id === product.id)
  if (existing) {
    existing.qty += qty
  } else {
    cartItems.push({ ...product, qty })
  }
  saveCart(cartItems)
  notify()
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId)
  saveCart(cartItems)
  notify()
}

export function updateQty(productId, qty) {
  const item = cartItems.find(item => item.id === productId)
  if (item) {
    item.qty = Math.max(1, qty)
    saveCart(cartItems)
    notify()
  }
}

export function clearCart() {
  cartItems = []
  saveCart(cartItems)
  notify()
}
