// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://gojobs.id',
    name: 'Gojobs.id - Lowongan Kerja BUMN, Perusahaan Ternama dan Perusahaan Luar Negri',
    description: 'Gojobs.id, Teman mencari kerja anda! Dapatkan lowongan pekerjaan dari BUMN, Perusahaan Ternama, dan Perusahaan Luar Negri',
    defaultLocale: 'id', // not needed if you have @nuxtjs/i18n installed
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/seo',
  ],
  devtools: { enabled: true },
  css: [ 
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build:{
    transpile: ['vue-toastification', ]
  }

})
