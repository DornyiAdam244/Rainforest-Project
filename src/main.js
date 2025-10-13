// src/main.js
import { createApp } from 'vue';
import './css/bootstrap.min.css';
import './css/style.css';

import App from './App.vue';
import router from './router'; // <-- EZ ÚJ

createApp(App)
  .use(router)                 // <-- EZ ÚJ
  .mount('#app');
