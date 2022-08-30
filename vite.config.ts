import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	mode: 'development',
	define: {
		'process.env': {
			BASE_URL: 'http://localhost:5000/api/',
			APP_NAME: 'APOLOGEA',
		},
	},
})
