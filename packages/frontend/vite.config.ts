import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    strictPort: true,
    host: 'localhost',
    watch: {
      followSymlinks: true,
      ignored: ['!**/node_modules/@kotbread-test/shared/**'],
    },
  },
  optimizeDeps: {
    force: true,
    exclude: ['@kotbread-test/shared'],
  },
  build: {
    sourcemap: true,
  },
  plugins: [svgr(), tsconfigPaths(), react()],
  resolve: {
    // Фиксит проблемы с установкой локальных пакетов в монорепе
    preserveSymlinks: true,
    alias: [
      {
        find: /^@vkontakte\/vkui$/,
        replacement: '@vkontakte/vkui/dist/cssm',
      },
    ],
  },
})
