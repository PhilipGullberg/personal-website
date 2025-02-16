<template >
    <main v-fade-in>
    <section class="flex justify-center mt-4" >
  <router-link
    to="/"
    class="inline-flex items-center space-x-2 bg-sky-900 text-white 
           px-4 py-2 rounded-md shadow-md hover:bg-sky-800 
           transition-colors duration-300 focus:outline-none focus:ring-2
           focus:ring-sky-900 focus:ring-offset-2"
  >
    <i class="fas fa-arrow-left"></i> 
    <span>Back</span>
  </router-link>
</section>
    <section class="min-h-screen flex flex-col items-center mt-2 bg-white">
      <div class="max-w-xl w-full mx-auto px-4 py-2 shadow-lg rounded-lg bg-white">
        <h1 class="text-3xl font-bold text-sky-900 mb-6 text-center">Contact me</h1>
  
        <p class="text-gray-600 mb-8 text-center">
          If you have a question or just want to say hi, feel free to send me a message. I'll get back to you as soon as possible.
        </p>
  
        <!-- Contact Form -->
        <form @submit="handleSubmit" method="POST" action="https://formspree.io/f/mqaeyrgq">
          <input type="hidden" name="_captcha" value="false">
          <!-- Name Field -->
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                     focus:ring-2 focus:ring-sky-900 focus:border-transparent"
              placeholder="Your Name"
              required
            />
          </div>
  
          <!-- Email Field -->
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                     focus:ring-2 focus:ring-sky-900 focus:border-transparent"
              placeholder="your@email.com"
              required
            />
          </div>
  
          <!-- Message Field -->
          <div class="mb-6">
            <label for="message" class="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                     focus:ring-2 focus:ring-sky-900 focus:border-transparent resize-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <div class="text-center">
            <button
            type="submit"
            class="w-full bg-[#124E66] text-white py-3 font-semibold rounded-lg hover:bg-[#0f3d52] transition flex items-center justify-center"
            :disabled="isLoading"
          >
            <span v-if="!isLoading">Send form</span>
            <svg
              v-else
              class="animate-spin h-5 w-5 text-white ml-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </button>
          </div>
        </form>
  
        <div v-if="successMessage" class="mt-4 text-green-600 font-medium text-center">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mt-4 text-red-600 font-medium text-center">
          {{ errorMessage }}
        </div>
      </div>
    </section>
</main>
  </template>
  
  <script>
import Navigation from '@/components/Navigation.vue'
  export default {
    name: 'Contact',
    components: {
      Navigation,
    },
    data() {
      return {
        isLoading: false,
        form: {
          name: '',
          email: '',
          message: '',
        },
        successMessage: '',
        errorMessage: '',
      }
    },
    methods: {
      handleSubmit() {
        this.isLoading = true; 
      },
    },
  }
  </script>
  
  <style scoped>
  /* Any extra styling you want */
  </style>
  