<template>
    <nav  class=" p-2 sticky top-0 transition-colors duration-300 z-90  " :class=" scrolled 
      ? 'bg-white border-b border-gray-200 shadow-sm transition-colors duration-200' 
      : 'bg-transparent border-none transition-colors duration-200'">
      <ul class="hidden md:flex justify-between items-center space-x-6 px-6">
        <img src="../assets/icon_fin.png" class="w-16 " alt="">
        <div class="flex space-x-10">
        <li>
          <a
            href="/#about"
            class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4 "
            active-class="active-link"
          >
            About <span class="text-sky-900 text-3xl">.</span>
          </a>
        </li>
        <li>
          <a
            href="/#kompetenser"
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
            href="/#projekt"
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
            <router-link
                to="/contact"
                class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
                active-class="active-link"
                @click.native="scrollToTop"
            >
                Contact me<span class="text-sky-900 text-3xl">.</span>
            </router-link>
        </li>
    </div>
      </ul>
      <div class="flex justify-between items-center px-4">
        <a href=""> <img src="../assets/icon_fin.png" class="w-14 md:hidden" alt=""></a>
      <div class="flex items-center md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700
                   hover:text-sky-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-800"
            @click="isOpen = !isOpen"
            aria-label="Toggle menu"
          >
            <svg
              class="h-8 w-8"
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
        <div v-if="isOpen" class="md:hidden mt-4  ">
            
        <ul class="space-y-4 ps-4 pb-2">
        
        <li>
          <a
            href="/#about"
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
            href="/#kompetenser"
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
            href="/#projekt"
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
            <router-link
                to="/contact"
                class="relative inline-block text-black 
             after:content-[''] after:absolute after:bottom-0 after:left-0 
             after:w-0 after:h-[2px] after:bg-sky-900 
             hover:after:w-full after:transition-all after:duration-300 
             mr-4"
                active-class="active-link"
                @click.native="scrollToTop"
            >
                Contact me<span class="text-sky-900 text-3xl">.</span>
            </router-link>
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
    scrollToTop() {
        window.scrollTo(0,0);
    },

    handleScroll() {
      // If scrolled down at all, set scrolled = true
      this.scrolled = window.scrollY > 0
    },
  },
  }
  </script>
  