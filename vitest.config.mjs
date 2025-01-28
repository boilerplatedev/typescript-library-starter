import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    passWithNoTests: true,
    setupFiles: ['./setup-vitest.ts'],
    include: ['./**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    // run tests sequentially
    fileParallelism: false,
  },
})
