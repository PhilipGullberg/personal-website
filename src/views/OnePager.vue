<template>
    <div class="min-h-screen flex flex-col">
      <!-- Navigationsmeny längst upp -->
      <Navigation />
      <div class="flex-grow">
        <section class="mb-16">
          <HeroTailwind />
        </section>
  
        <section class="mb-16" id="about">
          <About />
        </section>
  
        <!-- Kompetenser/Skills-komponenten -->
        <section class="mb-16" id="kompetenser">
          <Competencies />
        </section>
  
        <!-- Projekt-komponenten -->
        <section class="mb-16" id="projekt">
          <Projects />
        </section>
  
        <!-- Om Mig-komponenten -->
       
      </div>
  
      <!-- Footer, om du önskar -->
      <footer class="bg-gray-800 py-4 text-center text-white">
        &copy; 2025 Philip Gullberg. All rights reserved.
      </footer>
    </div>
  </template>
  
  <script>
  import Navigation from '@/components/Navigation.vue'
  import HeroTailwind from '@/components/HeroTailwind.vue'
  import Home from '@/components/Home.vue'
  import Competencies from '@/components/Competencies.vue'
  import Projects from '@/components/Projects.vue'
  import About from '@/components/About.vue'
  
  export default {
    name: 'Showcase',
    components: {
      Navigation,
      HeroTailwind,
      About,
      Competencies,
      Projects,
      
    },
  }
  </script>
  
  <style scoped>

  /* Om du vill lägga till specifik styling för din showcase-sida */
  </style>
  