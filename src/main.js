import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'; 

import Toast from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toast);
app.mount('#app');
// createApp(App).use(router).use(Toast).mount('#app')
