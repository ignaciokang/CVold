import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const corsOptions = {
  origin: "*"
}


// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ignaciokang.github.io/CV/",
  plugins: [react()],
  server: {
    cors: corsOptions,
  }

})
