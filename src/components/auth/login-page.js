import { createAuthBrand } from './auth-brand.js'

/**
 * Full login page layout (centered card, social buttons, link to register).
 * @returns {HTMLElement}
 */
export function createLoginPage() {
  const root = document.createElement('div')
  root.className = 'min-h-screen flex items-center justify-center px-4'
  root.innerHTML = `
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div id="auth-brand-slot"></div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mt-6">Welcome Back</h1>
        <p class="text-gray-500 dark:text-gray-400 mt-2">Log in to your account</p>
      </div>
      <form class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 space-y-5" id="login-form">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
          <input type="email" placeholder="you@email.com" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" />
        </div>
        <div>
          <div class="flex justify-between mb-1.5">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <a href="#" class="text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 font-medium">Forgot Password?</a>
          </div>
          <input type="password" placeholder="••••••••" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" />
        </div>
        <button type="submit" class="w-full py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors cursor-pointer shadow-lg shadow-violet-600/25">Login</button>
        <div class="relative my-2">
          <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-200 dark:border-gray-700"></div></div>
          <div class="relative flex justify-center text-sm"><span class="px-4 bg-white dark:bg-gray-900 text-gray-400">Or continue with</span></div>
        </div>
        <div class="flex gap-3">
          <button type="button" class="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <i class="fa-brands fa-google text-lg text-[#4285F4]"></i>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
          </button>
          <button type="button" class="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <i class="fa-brands fa-apple text-lg"></i>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Apple</span>
          </button>
        </div>
      </form>
      <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        Don't have an account? <a href="/src/pages/auth/register.html" class="text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-700">Sign up</a>
      </p>
    </div>
  `
  root.querySelector('#auth-brand-slot')?.replaceWith(createAuthBrand())
  root.querySelector('#login-form')?.addEventListener('submit', e => e.preventDefault())
  return root
}
