// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/index.css'

createApp(App)
  .use(router) // Använd Vue Router
  .mount('#app')
