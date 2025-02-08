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
        <div class="relative w-full">
            <div class="flex justify-start w-full absolute md:-top-30 -top-25 ">
                <img src="../assets/Paper_plane.png" class="md:w-52 w-42 rotate-70 ms-40" alt="">
            </div>
        </div>
        <div class="relative">
            <div
                class="absolute bg-sky-900 rounded-full w-6 h-6 opacity-90 
                    -top-20 md:left-48 -left-2"
            >
            </div>
            <div
                class="absolute bg-sky-900 rounded-full w-4 h-4 opacity-90 
                    -top-10 md:left-62 left-4"
            >
            </div>
            <div
                class="absolute bg-sky-900 rounded-full w-10 h-10 
                    -top-40 md:left-54 hidden md:block"
            >
            </div>
        </div>
  
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
  