import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
      rollupOptions: {
        input:{
          main: resolve(__dirname, 'index.html'),
          trainings: resolve(__dirname, 'trainings.html'),
          tournament: resolve(__dirname, 'tournament.html'),
          registration: resolve(__dirname, 'registration.html'),
          gallery: resolve(__dirname, 'gallery.html'),
          about: resolve(__dirname, 'about.html'),
        }
      }
    },
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
  base: "./"
})
