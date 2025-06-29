import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-site/', // <<< repo adınla birebir aynı OLMALI!
  plugins: [react()],
})
