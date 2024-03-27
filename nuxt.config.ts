// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  server: {
    port: 9019
  },
  css: [
    "@/assets/css/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    ['@nuxtjs/google-fonts', {
        families: {
          Poppins: true,
          Montserrat: true,
          Roboto: true,
          Inter: [400, 700],
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
          Inter: '200..700',
          'Crimson Pro': {
            wght: '200..900',
            ital: '200..700',
          }
        }
    }]
  ],
  device: {
    refreshOnResize: true
  },
  buildModules: [
    'nuxt-tailwind-heroicons'
  ],
   plugins: [
    '~/plugins/fontawesome'
  ]
})
