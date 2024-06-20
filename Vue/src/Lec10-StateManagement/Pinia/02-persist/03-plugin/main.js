import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import plugin
import piniaPersist from 'pinia-plugin-persistedstate';

import App from './app.vue';

const pinia = createPinia();
pinia.use(piniaPersist); // use plugin

const app = createApp(App);
app.use(pinia);

export default app;
