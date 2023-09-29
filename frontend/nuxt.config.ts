import { resolve } from "path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname)
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  server: {
    port: process.env.PORT || 3001,
  },
})
