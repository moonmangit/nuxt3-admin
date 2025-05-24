// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // default configuration
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  // module register
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@pinia/nuxt"],
  // app configuration
  ssr: false,
  runtimeConfig: {
    public: {
      apiBaseUrl: "<default>",
    },
  },
  // modules configuration
  fonts: {},
  icon: {
    serverBundle: "local",
  },
})
