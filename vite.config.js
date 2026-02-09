import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // GitHub Pages: serve SPA for direct/refresh on /about, /contact, etc.
    {
      name: 'copy-404-for-github-pages',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        const indexPath = resolve(outDir, 'index.html')
        const notFoundPath = resolve(outDir, '404.html')
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath)
        }
      },
    },
  ],
  base: "/",
  assetsInclude: ['**/*.glb'],
})
