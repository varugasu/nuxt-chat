// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  css: ['@unocss/reset/tailwind-compat.css'],
  runtimeConfig: {
    public: {
      wsUrl: 'ws://localhost:8000/ws',
    }
  },
})
