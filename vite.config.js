import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Разрешаем подключение через наш домен
    allowedHosts: ['xn----7sbnsddslml5i.xn--p1ai']
  },
})
