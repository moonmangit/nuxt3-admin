// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // default configuration
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  // module register
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  // app configuration
  ssr: false,
  runtimeConfig: {
    public: {
      apiBaseUrl: "<default>",
    },
  },
  components: {
    dirs: [
      {
        path: "./components/utils",
        pathPrefix: true,
        global: true,
      },
    ],
  },
  // modules configuration
  fonts: {},
  icon: {
    serverBundle: "local",
  },
  i18n: {
    defaultLocale: "en",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "th",
        name: "Thai",
        file: "th.json",
      },
    ],
  },
})
