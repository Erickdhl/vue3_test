// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    //'~/plugins/laravel-echo'
    { src: '~/plugins/laravel-echo.ts', mode: 'client' }
  ],
})
