<template>
    <section class="pb-10 pt-8 bg-white">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Section Heading -->
        <div class="text-center mb-12">
          <p class="text-xl font-semibold tracking-wide text-sky-900">
            Skills & Tools
          </p>
          <h2 class="text-4xl font-bold text-sky-900 mt-2">
            My toolbox and what I can do
          </h2>
          <p class="text-gray-600  mt-4 max-w-2xl mx-auto">
            Below is a selection of the tools and technologies I work with. I’m well verse in modern web development and design, and I’m always eager to learn new things. At the moment I am working mostly with a <span class="text-sky-700">Vue3 frontend and a Flask backend</span>. I also am experimenting and building loads of apps with <span class="text-sky-700">AI</span> apis, where openAI is my favorite.
          </p>
        </div>
  
        <!-- Skills Grid -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center"
        >
         <!-- AI -->
         <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-brands fa-html5 text-4xl text-sky-900"></i>
            <span class="text-gray-700 text-sm font-medium">AI</span>
          </div>
          <!-- HTML5 -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-brands fa-html5 text-4xl text-sky-900"></i>
            <span class="text-gray-700 text-sm font-medium">HTML5</span>
          </div>
  
          <!-- CSS3 -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-brands fa-css3 text-4xl text-sky-900"></i>
            <span class="text-gray-700 text-sm font-medium">CSS3</span>
          </div>
  
          <!-- JavaScript -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-brands fa-js text-4xl text-sky-900"></i>
            <span class="text-gray-700 text-sm font-medium">JavaScript</span>
          </div>
  
          <!-- Vue.js -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-brands fa-vuejs text-4xl text-sky-900"></i>
            <span class="text-gray-700 text-sm font-medium">Vue.js</span>
          </div>
  
          <!-- Git -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-brands fa-git-alt text-4xl text-sky-900"></i>
            <span class="text-gray-700 text-sm font-medium">Git</span>
          </div>
          <!--Figma-->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-brands fa-figma text-4xl text-sky-900"></i>
            <span class="text-gray-700 text-sm font-medium">Figma</span>
          </div>
          <!-- Tailwind CSS -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" class="text-4xl text-sky-900 w-12"></img>
            <span class="text-gray-700 text-sm font-medium">TailwindCSS</span>
          </div>
         
          <!-- Python -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" class="text-4xl text-sky-900 w-10"></img>
            <span class="text-gray-700 text-sm font-medium">Python</span>
          </div>

          <!-- Flask -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png" class="text-4xl text-sky-900 w-10"></img>
            <span class="text-gray-700 text-sm font-medium">Flask</span>
          </div>
          <!-- Django -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <img src="https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png" class="text-4xl text-sky-900 w-8"></img>
            <span class="text-gray-700 text-sm font-medium">Django</span>
          </div>
          <!-- Rest API -->
          <div class="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
            <i class="fa-solid fa-gear text-4xl text-sky-900 w-8" ></i>
            <span class="text-gray-700 text-sm font-medium">Rest API:s</span>
          </div>
          
        </div>
      </div>
      <div class="flex justify-end absolute w-full ">
        <img src="../assets/Paper_plane.png" class="md:w-52 w-42 rotate-150 me-28  " alt="">
    </div>
    </section>
    
  </template>
  
  <script>
  export default {
    name: 'Competencies',
  }
  </script>
  
  <style scoped>
  /* Custom styling (optional) */
  </style>
  