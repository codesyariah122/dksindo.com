// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  server: {
    port: 9019
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    'nuxt-tailwind-heroicons'
  ],
   plugins: [
    '~/plugins/fontawesome'
  ]
})
