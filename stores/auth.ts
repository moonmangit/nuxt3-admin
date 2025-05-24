export const useAuthStore = defineStore("auth", () => {
  const user = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  return {
    isAuthenticated,
  }
})
