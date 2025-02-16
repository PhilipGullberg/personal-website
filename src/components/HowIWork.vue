<template>
    <section
      class="bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-800"
      v-fade-in
    >
      <!-- Header area -->
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl text-sky-900 font-extrabold tracking-tight mb-4">
          How I Work
        </h2>
        <p class="mb-10 text-lg text-gray-600">
          Building a website can be a daunting task, but I make it easy
          by focusing on collaboration, clear communication, and a
          proven step-by-step process.
        </p>
      </div>
  
      <!-- Process Steps in a Card/Grid Layout -->
      <div class="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Step 1 -->
        <div class="shadow-sm border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">
            1. Plan
          </h3>
          <p class="text-sm text-gray-600 flex-1">
            We’ll discuss your ideas, goals, and timeline. You share your
            vision, and I'll offer suggestions on what might work best
            for your project.
          </p>
        </div>
  
        <!-- Step 2 -->
        <div class="shadow-sm border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">
            2. Design
          </h3>
          <p class="text-sm text-gray-600 flex-1">
            I create wireframes or mockups to capture your brand's look
            and feel, giving you a clear picture of how the final site
            will appear.
          </p>
        </div>
  
        <!-- Step 3 -->
        <div class="shadow-sm border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">
            3. Develop
          </h3>
          <p class="text-sm text-gray-600 flex-1">
            Using modern technologies (like Vue.js), I turn designs into
            a responsive, user-friendly interface, while also setting up
            your backend and integrations.
          </p>
        </div>
  
        <!-- Step 4 -->
        <div class="shadow-sm border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">
            4. Test & Refine
          </h3>
          <p class="text-sm text-gray-600 flex-1">
            We’ll perform thorough testing to ensure everything works
            smoothly and make refinements based on your feedback.
          </p>
        </div>
  
        <!-- Step 5 -->
        <div class="shadow-sm border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">
            5. Launch
          </h3>
          <p class="text-sm text-gray-600 flex-1">
            Once you’re happy, we deploy your site. I can also assist
            with hosting, domain setup, and ongoing maintenance.
          </p>
        </div>
  
        <!-- Step 6 -->
        <div class="shadow-sm border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">
            6. Support
          </h3>
          <p class="text-sm text-gray-600 flex-1">
            Even after launch, I'm here to help with any updates,
            performance optimizations, and new features down the road.
          </p>
        </div>
      </div>
  
      <!-- Services offered -->
      <div class="max-w-3xl mx-auto mt-16 text-center">
        <h3 class="text-2xl font-semibold mb-4">
          Services I Offer
        </h3>
        <ul class="space-y-3 text-gray-600">
          <li><i class="fa-solid fa-check text-sky-900"></i> Custom Website Design</li>
          <li><i class="fa-solid fa-check text-sky-900"></i> Responsive Frontend Development</li>
          <li><i class="fa-solid fa-check text-sky-900"></i> Backend Integration &amp; APIs</li>
          <li><i class="fa-solid fa-check text-sky-900"></i> Content Management &amp; E-Commerce</li>
          <li><i class="fa-solid fa-check text-sky-900"></i> Performance Optimization &amp; SEO</li>
          <li><i class="fa-solid fa-check text-sky-900"></i> Ongoing Support &amp; Maintenance</li>
        </ul>
      </div>
  
      <!-- CTA -->
      <div class="mt-10 text-center">
        <p class="text-lg text-gray-700">
          Ready to get started?
          <router-link
            to="/contact"
            class="text-blue-600 hover:underline font-medium"
          >
            Contact me
          </router-link>
          for a free consultation and quote!
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HowIWork',
  }
  </script>
  
  <style scoped>
  /* 
    - All styling is done via Tailwind classes.
    - Feel free to add or modify classes to match your own design system.
  */
  </style>
  