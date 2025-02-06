<!-- src/App.vue -->
<template>
  <div id="app" class="flex flex-col min-h-screen">
    <OnePager />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import HeroTailwind from './components/HeroTailwind.vue'
import OnePager from './views/OnePager.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    HeroTailwind,
    OnePager
  }
}
</script>
<style>
  html { scroll-behavior: smooth; }</style>
