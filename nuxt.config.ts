// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    baseURL: '/digital-solution/',
    buildAssetsDir: 'assets'
  },

  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
    '~/plugins/preline.client.ts'
  ],

  compatibilityDate: '2024-11-16'
})