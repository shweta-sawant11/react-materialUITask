import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use this only if deploying to GitHub Pages:
const repoName = 'react-materialUITask' // 👈 change this to match your GitHub repo

export default defineConfig({
  base: `/${repoName}`,
  plugins: [react()],
  
})
