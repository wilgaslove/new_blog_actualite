// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  // Ce paramètre est souvent spécifique à Nuxt 3 pour le répertoire de build
  nitro: {
    firebase: {
      gen: 2
    }
  },

  devtools: { enabled: true },

  css: ['@/assets/css/tailwind.css'],

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },

  modules: [
    "@nuxt/content", 
    "@nuxtjs/tailwindcss", 
    "@vueuse/nuxt", 
    "nuxt-marquee"
  ],
  
});
