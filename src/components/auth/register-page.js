import { createAuthBrand } from './auth-brand.js'

/**
 * Full register page layout (centered card, link to login).
 * @returns {HTMLElement}
 */
export function createRegisterPage() {
  const root = document.createElement('div')
  root.className = 'min-h-screen flex items-center justify-center px-4 py-12'
  root.innerHTML = `
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div id="auth-brand-slot"></div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mt-6">Create Account</h1>
        <p class="text-gray-500 dark:text-gray-400 mt-2">Start shopping with VENORA</p>
      </div>
      <form class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 space-y-5" id="register-form">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
          <input type="text" placeholder="John Doe" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
          <input type="email" placeholder="you@email.com" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
          <input type="password" placeholder="••••••••" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
        </div>
        <button type="submit" class="w-full py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors cursor-pointer shadow-lg shadow-violet-600/25">Create Account</button>
      </form>
      <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        Already have an account? <a href="/src/pages/auth/login.html" class="text-violet-600 dark:text-violet-400 font-semibold">Sign in</a>
      </p>
    </div>
  `
  root.querySelector('#auth-brand-slot')?.replaceWith(createAuthBrand())
  root.querySelector('#register-form')?.addEventListener('submit', e => e.preventDefault())
  return root
}
