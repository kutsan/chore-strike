// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

// eslint-disable-next-line import/no-extraneous-dependencies
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: 'import * as React from "react"'
  }
})
