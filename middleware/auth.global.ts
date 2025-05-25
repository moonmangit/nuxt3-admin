const LOGIN_PATH = "/login"
const HOME_PATH = "/"

export default defineNuxtRouteMiddleware((to, _) => {
  const authStore = useAuthStore()
  if (authStore.isAuthenticated) {
    if (to.path === LOGIN_PATH) return navigateTo(HOME_PATH)
  } else {
    if (to.path !== LOGIN_PATH) return navigateTo(LOGIN_PATH)
  }
  return
})
