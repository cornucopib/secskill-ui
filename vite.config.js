import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
    envDir: "env",
    envPrefix: "ENV_",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve('./src')
        }
    },
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: "http://localhost:8888",
                changeOrigin: true,
                rewrite:(path)=>path.replace(/^\/api/,'')
            }
        }
    }
});
