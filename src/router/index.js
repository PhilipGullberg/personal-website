// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Competencies from '../components/Competencies.vue'
import Projects from '../components/Projects.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/kompetenser', name: 'Competencies', component: Competencies },
  { path: '/projekt', name: 'Projects', component: Projects },
  { path: '/om-mig', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
