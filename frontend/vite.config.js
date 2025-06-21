import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-redirects',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: '_redirects',
          source: '/* /index.html 200'
        })
      }
    }
  ]
})

