<template>
    <section class=" bg-white pt-4" id="about">
      <div class="max-w-5xl mx-auto px-4 md:px-10">
        <!-- Section Label / Heading -->
        <p class="text-sm font-semibold tracking-wide text-sky-900 uppercase">
          About
        </p>
        <h2 class="text-4xl font-bold text-sky-900 mt-2 mb-8">
          Who Am I?
        </h2>
  
        <div class="flex flex-col md:flex-row items-center md:space-x-12">
          <!-- Profile Image -->
          <div class="w-48 h-48 mb-6 md:mb-0 md:w-64 md:h-64 shrink-0 self-start">
            <!-- Round image: Replace 'profile.jpg' with your actual image -->
            <img
              src="https://ntigymnasiet.se/wp-content/uploads/sites/15/2023/05/philip-gullberg-svartvit-400x560.jpg"
              alt="Profile photo"
              class="w-full h-full object-cover rounded-full shadow-md"
            />
          </div>
  
          <!-- Text Content -->
          <div class="max-w-2xl text-gray-700">
            <p class="mb-4 text-md md:text-lg leading-relaxed">
              I’m a <span class="font-semibold">web developer</span> and 
              <span class="font-semibold">educator</span> based in Sweden, 
              passionate about bringing both the technical and educational aspects 
              of code to life. I’ve honed my skills in <span class="font-semibold">high-level programming</span> and problem-solving
              with an education from <span class="text-sky-700">KTH</span> where i have a degree as a <span class="underline">Civil engineer in computer science.</span>
              I have recently also added 15 credits in <span class="text-sky-700">AI</span> from KTH.
            </p>
            <p class="mb-4 text-md md:text-lg leading-relaxed">
              My goal is always to break down complex concepts into easy, relatable 
              tasks, and then executing them step by step in an ordered manner.
            </p>
            <p class="mb-4 text-md md:text-lg leading-relaxed">
                I now specialize in building robust, efficient, and user-friendly solutions as a <span class="text-sky-700">web developer</span>. Beyond traditional development, I serve as a <span class="text-sky-700">technical developer</span> for all 25 <span class="text-sky-700">NTI schools</span> in <span class="text-sky-700">AI</span>. This role combines my passion for cutting-edge technology with education, as I design and implement AI-based tools and platforms that enhance both teaching and learning experiences.
            </p> 
            <p class="text-md md:text-lg leading-relaxed">
              Outside of coding and teaching, you’ll likely find me exploring new 
              technologies, especially in AI, refining my teaching methods, or simply enjoying 
              life with my family. I’m always eager to connect, collaborate, 
              and help others fall in love with coding the same way I did.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "About",
  }
  </script>
  
  <style scoped>
  /* You can add extra custom styling here if needed */
  </style>
  