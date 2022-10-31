import { createApp } from 'vue';
import App from './App.vue';
import router from './router';



// Each route should map to a component.
// We'll talk about nested routes later.
createApp(App).use(router).mount('#app')
