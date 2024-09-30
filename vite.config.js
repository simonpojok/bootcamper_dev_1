import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Ensures the test environment is a simulated browser
    globals: true,        // Enables global test variables like `describe` and `test`
    setupFiles: './src/setupTests.js', // Points to your test setup file
  },
})
