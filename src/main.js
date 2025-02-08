// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/index.css'
import vFadeIn from './directives/vFadein.js'

createApp(App)
  .use(router) 
  .directive('fade-in', vFadeIn)
  .mount('#app')
