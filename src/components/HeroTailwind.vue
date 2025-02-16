<template>
  <section class="relative w-full md:min-h-screen h-130 flex bg-white">
    <div class="container mx-auto md:px-20 px-8 pt-12 md:pt-28">
      <p class="text-md text-sky-900 mb-2">Hi, my name is </p>

      <h1 class="sm:text-7xl text-5xl font-bold text-black mb-4">
        Philip Gullberg.
      </h1>

      <h2 class="md:text-6xl text-4xl font-semibold text-gray-600 mb-6">
        I build things for the web.
      </h2>

      <p class="md:max-w-2xl max-w-lg text-gray-600 mb-8">
        I’m a Swedish software engineer specializing in building exceptional 
        digital experiences. Currently, I’m focused on creating 
        accessible, user-centric educational products at <a href="https://www.pedagoai.se" class="text-sky-800 hover:underline">PedagoAI</a>.
      </p>

      <a
        href="#projekt"
        class="inline-block bg-sky-800 hover:bg-sky-900 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-300"
      >
        Check out my work!
      </a>
    </div>
  </section>
  <div
    class="absolute md:top-4/5 hidden md:right-8 md:flex flex-col space-y-4
           transform -translate-y-1/2 z-50 items-center ">
           <div class="flex flex-col items-start">
            
           <h1 class="text-md text-gray-500"><i class="fa-solid fa-location-dot me-1 mb-2"></i>Location</h1>
  <h2 class="text-lg font-semibold ">Sweden</h2>
  <h3 class="text-sm text-gray-600 mb-6">Stockholm</h3>
</div>
    <a
      href="https://github.com/PhilipGullberg"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 w-32 flex flex-col items-center hover:text-sky-800 mb-4 transition-colors duration-300"
    >
    <i class="fa-brands fa-github fa-xl mb-4"></i>
    </a>

    <a
      href="https://www.linkedin.com/in/philip-gullberg-638bbaa8/"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 w-34 hover:text-sky-800 flex flex-col items-center transition-colors duration-300"
    >
    <i class="fa-brands fa-linkedin fa-xl "></i>
    </a>
    <span class="h-92 border-l-1  border-sky-900 mb-4 "></span>
  </div>
  <div class="flex justify-center">
    <img src="../assets/Paper_plane.png" class="md:w-68 w-48 -scale-100 rotate-240 absolute z-50 top-5/6 md:top-3/4" alt="">
  </div>
</template>
  
  <script>
  export default {
    name: "HeroTailwind",
  }
  </script>
  
  <style>
  
  </style>
  