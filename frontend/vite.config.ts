import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react/',
  build: {
    outDir: '../app/wwwroot/react',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'react.js',
        assetFileNames: (asset) =>
          asset.name?.endsWith('.css')
            ? 'react.css'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
})
