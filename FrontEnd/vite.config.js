import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { url } from 'node:inspector'

// https://vitejs.dev/config/
export default defineConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '!': fileURLToPath(new URL('./public', import.meta.url)), 
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
})
