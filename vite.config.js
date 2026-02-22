import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // الخطوة 1: استيراد الإضافة

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // الخطوة 2: تفعيل الإضافة
  ],
})