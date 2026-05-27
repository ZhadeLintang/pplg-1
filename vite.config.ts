import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'pplg-1' dengan nama repo Anda jika berbeda
export default defineConfig({
  base: '/pplg-1/',
  plugins: [react()]
})