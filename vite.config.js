import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/main.jsx',
        'resources/css/app.css',
      ],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
})
