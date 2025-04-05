import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    root: './',
    base: '/',
    plugins: [
        react(),
        svgr(),
    ],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            assets: "/src/assets/",
            data: "/data/",
            components: "/src/components/",
            utils: "/src/utils/",
            views: "/src/views/",
        },
      },
    
})
