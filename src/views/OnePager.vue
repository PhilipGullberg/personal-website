<template>
    <div class="min-h-screen flex flex-col">
      <!-- Navigationsmeny längst upp -->
      <Navigation />
      <div class="flex-grow">
        <section class="py-12" v-fade-in>
          <HeroTailwind />
        </section>
  
        <section class="py-12" id="about" v-fade-in>
          <About />
        </section>
        <div class="relative w-full">
            <div class="flex justify-start w-full absolute md:-top-30 -top-25 ">
                <img src="../assets/Paper_plane.png" class="md:w-52 w-42  z-50 rotate-70 ms-40" alt="">
            </div>
        </div>
        <div class="relative">
            <div
                class="absolute bg-sky-900 rounded-full w-6 h-6 opacity-90 
                    -top-20 md:left-48 -left-3"
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
        
        <section class="pt-12" id="banner" v-fade-in>
          <div 
    class="bg-gradient-to-r from-sky-800 to-sky-900 text-white py-10 px-6 shadow flex flex-col sm:flex-row items-center justify-around"
  >
    <!-- Text Content -->
    <div class="mb-4 sm:mb-0 sm:mr-6 max-w-lg">
      <h2 class="text-2xl font-bold mb-2">
        Ready to Take Your Website to the Next Level?
      </h2>
      <p class="text-base">
        Let's collaborate on your next big project. Get in touch for a free consultation and personalized quote.
      </p>
    </div>

    <!-- CTA Button -->
    <router-link
      to="/contact"
      class="inline-block bg-white text-black font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-50 transition"
    >
      Contact Me <i class="fa-solid fa-arrow-right ms-2"></i>
    </router-link>
  </div>
        </section>
  
        <!-- Kompetenser/Skills-komponenten -->
        <section class="py-12" id="kompetenser" v-fade-in>
          <Competencies />
        </section>

  
  
        <!-- Projekt-komponenten -->
        <section class="py-12" id="projekt">
          <Projects />
        </section>

        <section class="py-12" id="howiwork">
          <HowIWork />
        </section>
       
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
  import Competencies from '@/components/Competencies.vue'
  import Projects from '@/components/Projects.vue'
  import About from '@/components/About.vue'
  import HowIWork from '@/components/HowIWork.vue'
  
  export default {
    name: 'Showcase',
    components: {
      Navigation,
      HeroTailwind,
      About,
      Competencies,
      Projects,
      HowIWork,
      
    },
    
  }
  </script>
  
  <style>
.fade-start {
  opacity: 0;
  transform: translateY(20px);
}

.fade-end {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
  </style>
  