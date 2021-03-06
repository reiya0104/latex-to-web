import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 本番時はgithubリポジトリをルートパスにする
  base: (process.env.NODE_ENV === 'production')
    ? '/latex-to-web/' : './',
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@c': resolve(__dirname, 'src/components'),
      '@v': resolve(__dirname, 'src/views'),
      '@u': resolve(__dirname, 'src/utils'),
    }
  },
  plugins: [vue()]
})
