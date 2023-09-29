/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    css: true,
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      exclude: [...configDefaults.coverage.exclude, '**/src/{main,App}.tsx'],
      // sets 80% goal of code coverage
      branches: 80,
      functions: 80,
      statements: 80,
      lines: 80,
    },
  },
});
