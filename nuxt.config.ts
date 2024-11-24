// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    baseURL: '/digital-solution/',
    buildAssetsDir: 'assets'
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      "DM Sans": {
        wght: '100..900',
        ital: '100..900',
      },
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
    '~/plugins/preline.client.ts'
  ],

  compatibilityDate: '2024-11-16'
})