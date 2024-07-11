import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/vue3';
import {route, ZiggyVue} from 'ziggy-js';
import { Ziggy } from './ziggy';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('@modules/**/*.vue', { eager: true });
        const page = pages[`/Modules/Vue/resources/views/Vuejs/${name}.vue`];
        if (!page) {
            console.error(`Page not found: ${name}`);
            return;
        }
        return page.default || page;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });


        app.config.globalProperties.$route = route

        // Đăng ký component Link
        app.component('Link', Link);

        app.use(plugin).use(ZiggyVue, Ziggy).mount(el);
    },
});
