import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  preview :{
    host :true,
    port:1000
  },
  build: {
    outDir: 'dist', // Change this to 'dist'
  },
})
