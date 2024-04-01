// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  server: {
    port: 9019
  },
  alias: {
    // "@": resolve(__dirname, "/")
    assets: "/<rootDir>/assets"
  },
  body: true,
  components: true,
  devtools: { enabled: true },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', body: true, defer: true }
    ]
  },
  css: [
    "@/assets/css/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    'vue3-carousel-nuxt',
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
  carousel: {
    prefix: 'C'
  },

  device: {
    refreshOnResize: true
  },
  buildModules: [
    'nuxt-tailwind-heroicons'
  ],
   plugins: [
    '~/plugins/fontawesome',
    {src: '~/plugins/crisp', mode: 'client', ssr: false}
  ]
})
