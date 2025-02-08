<template>
    <section class="py-10" v-fade-in>
      <div class="max-w-6xl mx-auto px-4"  >
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-sky-900">
            A Selection of My Projects
          </h2>
          <p class="text-gray-600 mt-2  max-w-2xl mx-auto">
            Below are some of the applications I’ve built, demonstrating my skills
            in modern web development and design. At the moment I am working mostly with a Vue3 frontend and a Flask backend. I also am experimenting and building loads of apps with AI apis, where openAI is my favorite.
          </p>
        </div>
  
        <div class="space-y-12">
          <div
            v-for="(project, idx) in projects"
            :key="project.id"
            class="flex flex-col md:flex-row items-center 
                   bg-gray-50 rounded-lg shadow-md overflow-hidden"
                   v-fade-in
          >
            <div
              class="w-full md:w-1/2 md:p-8 p-4 order-2 md:order-1"
              :class="idx % 2 === 0 ? 'md:order-2' : 'md:order-3'"
              >
              <h3 class="text-2xl font-semibold text-sky-900 mb-4">
                {{ project.title }}
              </h3>
              <p class="text-gray-700 mb-4">
                {{ project.description }}
              </p>
  
              <div class="flex flex-wrap items-center space-x-4 mb-4">
                <a
                  v-if="project.caseStudyLink"
                  :href="project.caseStudyLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-sky-900 text-white rounded-md shadow-md 
                         hover:bg-sky-800 transition-colors duration-300 mb-2"
                >
                  Case Study
                </a>
  
                <a
                  v-if="project.liveLink"
                  :href="project.liveLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-sky-900 text-white rounded-md shadow-md 
                         hover:bg-sky-800 transition-colors duration-300 mb-2"
                >
                  Live Demo
                </a>
  
                <a
                  v-if="project.githubLink"
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-sky-900 text-white rounded-md shadow-md 
                         hover:bg-sky-800 transition-colors duration-300 mb-2"
                >
                  <i class="fab fa-github mr-1"></i> GitHub
                </a>
              </div>
  
              <div class="flex flex-wrap space-x-2 items-center">
                <span
                  v-for="(tech, tIndex) in project.techStack"
                  :key="tIndex"
                  class="text-gray-500 text-sm flex items-center"
                >
                  <i :class="tech.icon" class="mr-1"></i> {{ tech.name }}
                </span>
              </div>
            </div>
            <div
              class="w-full md:w-1/2 relative overflow-hidden bg-white order-1 md:order-2"
              :class="idx % 2 === 0 ? 'md:order-1' : 'md:order-2'"
            >

              <iframe
                v-if="project.videoUrl"
                :src="project.videoUrl"
                frameborder="0"
                allowfullscreen
                class="w-full h-64 md:h-full"
              ></iframe>
              <img
                v-else-if="project.imageUrl"
                :src="project.imageUrl"
                :alt="project.title"
                class="object-cover w-full h-64 md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'PedagoAI',
            description:
              'A web application for educators to help save hours each week by generating high-quality slides, assignments and content and easily connect it to google classroom. Built with openAI api that helps to generate the content. Also integrating with google API to connect to google classroom and create slides and documents. Site is also setup with google SSO, for simple login. ',
            /* videoUrl: 'https://www.youtube.com/embed/<VIDEO_ID>', */
            imageUrl: '/pedagoAI.png',
            liveLink: 'https://pedagoai.se',
            githubLink: 'https://github.com/PhilipGullberg',
            techStack: [
              { name: 'Vue3.js', icon: 'fa-brands fa-vuejs' },
              { name: 'Tailwind', icon: 'fa-brands fa-css3' },
              { name: 'Flask', icon: 'fa-brands fa-python' },
            ],
          },
          {
            id: 2,
            title: 'Personal Website for Janne Andersson',
            description:
              'A personal website for former Swedish football head coach who currently gives lectures and talks about leadership and team building.',
            imageUrl: '/janne-website.png',
            liveLink: 'https://janneandersson.com',
            // caseStudyLink: '#',    // optional
            githubLink: 'https://github.com/PhilipGullberg',
            techStack: [
              { name: 'Vue3.js', icon: 'fa-brands fa-vuejs' },
              { name: 'Tailwind', icon: 'fa-brands fa-css3' },
              // ...
            ],
          },
          {
            id: 3,
            title: 'Smart Food Planner',
            description:
              'A website to quickly get a meal plan based on your preferences and dietary restrictions. AI helps you create a shopping list and plan your meals in minutes. The website is built with Vue.js and Tailwind CSS with at backend of Django. I use fine-tuning and searching of the OpenAI model to generate the meal plans. ',
            imageUrl: '/SmartMatPlanerare_landing.png',
            liveLink: 'https://smart-mat.vercel.app/',
            githubLink: 'https://github.com/PhilipGullberg/SmartMat',
            techStack: [
              { name: 'Vue3.js', icon: 'fa-brands fa-vuejs' },
              { name: 'Django', icon: 'fa-brands fa-python' },
              { name: 'CSS3', icon: 'fa-brands fa-css3' },
            ],
          },
          {
            id: 4,
            title: 'Personal trainer',
            description:
              'A website for a personal trainer in Sweden. Focus on the design and the user experience. ',
            imageUrl: '/Ulrika_landing.png',
            liveLink: 'https://ulrikashemsida.vercel.app/',
            githubLink: 'https://github.com/PhilipGullberg/Ulrikashemsida',
            techStack: [
              { name: 'CSS3', icon: 'fa-brands fa-css3' },
              { name: 'Vue3.js', icon: 'fa-brands fa-vuejs' },
            ],
          },
          {
            id: 5,
            title: 'ProggaMera, learn to code',
            description:
              'A website where teachers can access courses and share them with students. Focus on easy to use and having full insight of students work. Tracking pages read and time spent on each page. What excercies the students have completed and what areas the class are having trouble with.',
            imageUrl: '/Proggamera_Landing_page.png',
            githubLink: 'https://github.com/PhilipGullberg/Ulrikashemsida',
            techStack: [
              { name: 'Django', icon: 'fa-brands fa-python' },
              { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
            ],
          },
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  /* Example minimal styling to keep corners smooth and consistent */
  </style>
  