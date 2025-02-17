import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
      'import.meta.env.VITE_CLIENT_ID': JSON.stringify(process.env.VITE_CLIENT_ID),  
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify(process.env.VITE_API_BASE_URL),    
      'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY), }
})
