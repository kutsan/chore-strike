// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

// eslint-disable-next-line import/no-extraneous-dependencies
import reactRefresh from '@vitejs/plugin-react-refresh'
import { minifyHtml } from 'vite-plugin-html'

import path from 'path'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    assetsDir: './',
    emptyOutDir: true
  },
  plugins: [reactRefresh(), minifyHtml()],
  esbuild: {
    jsxInject: 'import * as React from "react"'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
