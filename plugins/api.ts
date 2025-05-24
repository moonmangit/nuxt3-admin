export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({})

  return {
    provide: {
      api,
    },
  }
})
