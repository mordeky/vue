import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './1-UseStore.vue';
// import App from './2-DestructReactiveObject.vue';
// import App from './3-UseStoreByDestructuring.vue';

// import App from './02-async/App.vue';

const pinia = createPinia();
// pinia.use(piniaPersist);

const app = createApp(App);
app.use(pinia);

// app.mount('#app');

export default app;
