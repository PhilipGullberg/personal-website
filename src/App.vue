<!-- src/App.vue -->
<template>
  <div id="app" class="flex flex-col min-h-screen">
    
    <Analytics />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import HeroTailwind from './components/HeroTailwind.vue'
import OnePager from './views/OnePager.vue';
import { Analytics } from "@vercel/analytics/vue";

export default {
  name: 'App',
  components: {
    Navigation,
    HeroTailwind,
    OnePager,
    Analytics
  }
}
</script>
<style>
  html { scroll-behavior: smooth; }</style>
