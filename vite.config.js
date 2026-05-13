import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'src/pages/home/index.html'),
        shop: resolve(__dirname, 'src/pages/shop/index.html'),
        categories: resolve(__dirname, 'src/pages/categories/index.html'),
        about: resolve(__dirname, 'src/pages/about/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
        product: resolve(__dirname, 'src/pages/product/index.html'),
        cart: resolve(__dirname, 'src/pages/cart/index.html'),
        wishlist: resolve(__dirname, 'src/pages/wishlist/index.html'),
        login: resolve(__dirname, 'src/pages/auth/login.html'),
        register: resolve(__dirname, 'src/pages/auth/register.html'),
      }
    }
  }
})