<template>
    <nav  class=" p-2 sticky top-0 transition-colors duration-300 z-90  " :class="{'bg-gray-200': isOpen, '': !isOpen}, scrolled 
      ? 'bg-white border-b border-gray-200 shadow-sm transition-colors duration-200' 
      : 'bg-transparent border-none transition-colors duration-300'">
      <ul class="hidden md:flex justify-between space-x-6 px-6">
        <a href=""> <img src="../assets/logo.png" class="w-12 " alt=""></a>
        <div class="flex space-x-10">
        <li>
          <a
            href="#about"
            class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
            active-class="active-link"
          >
            About <span class="text-sky-900 text-3xl">.</span>
          </a>
        </li>
        <li>
          <a
            href="#kompetenser"
            class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
            active-class="active-link"
          >
            Skills & Tools <span class="text-sky-900 text-3xl">.</span>
          </a>
        </li>
        <li>
          <a
            href="#projekt"
            class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
            active-class="active-link"
          >
            Projects <span class="text-sky-900 text-3xl">.</span>
          </a>
        </li>
        <li>
            <a
                href="#kontakt"
                class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
                active-class="active-link"
            >
                Contact me<span class="text-sky-900 text-3xl">.</span>
            </a>
        </li>
    </div>
      </ul>
      <div class="flex justify-between">
        <a href=""> <img src="../assets/logo.png" class="w-10 md:hidden" alt=""></a>
      <div class="flex items-center md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700
                   hover:text-sky-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-800"
            @click="isOpen = !isOpen"
            aria-label="Toggle menu"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <!-- Mobile menu -->
        
        </div>
        <div v-if="isOpen" class="md:hidden mt-4 ">
            
        <ul class="space-y-4">
        
        <li>
          <a
            to="#about"
            class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
            active-class="active-link"
          >
            About <span class="text-sky-900 text-3xl">.</span>
          </a>
        </li>
        <li>
          <a
            to="#kompetenser"
            class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
            active-class="active-link"
          >
          Skills & Tools <span class="text-sky-900 text-3xl">.</span>
          </a>
        </li>
        <li>
          <a
            to="#projekt"
            class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
            active-class="active-link"
          >
            Projects <span class="text-sky-900 text-3xl">.</span>
          </a>
        </li>
        <li>
            <a
                to="#kontakt"
                class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
                active-class="active-link"
            >
                Contact me<span class="text-sky-900 text-3xl">.</span>
            </a>
        </li>
    </ul>

</div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
    data() {
        return {
        isOpen: false,
        scrolled: false,
        };
    },
    mounted() {
    // Listen to scroll events
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    // Clean up event listener to avoid memory leaks
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    handleScroll() {
      // If scrolled down at all, set scrolled = true
      this.scrolled = window.scrollY > 0
    },
  },
  }
  </script>
  