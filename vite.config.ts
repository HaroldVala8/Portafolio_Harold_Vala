import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portafolio_Harold_Vala/',
  plugins: [react()],
})
