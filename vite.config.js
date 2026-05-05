import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, 'src/pages/shop/index.html'),
        product: resolve(__dirname, 'src/pages/product/index.html'),
        cart: resolve(__dirname, 'src/pages/cart/index.html'),
        login: resolve(__dirname, 'src/pages/auth/login.html'),
        register: resolve(__dirname, 'src/pages/auth/register.html'),
      }
    }
  }
})