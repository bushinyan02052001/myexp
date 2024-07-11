import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.js']),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve:{
        alias:{
            '@modules':  __dirname + '/Modules/Vue/resources/views/Vuejs',
            '@assets': __dirname + '/Modules/Vue/resources/assets'
        }
    }
});
