import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import naive from "naive-ui";

// Each route should map to a component.
// We'll talk about nested routes later.
createApp(App).use(router).use(naive).mount('#app')
