import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// import vuetify from '@vuetify/plugin-vue2-vite'
import vuetify from 'vite-plugin-vuetify'
// import postcss from './postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    vuetify({ autoImport: true }),
  ],
  css: {
    // postcss
  },
  // base: '/vue-sidebar-menu/', // 启动时默认的根路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
    dedupe: ['vue'],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
