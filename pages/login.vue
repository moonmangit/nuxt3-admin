<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

    <div class="max-w-md w-full space-y-8 relative">
      <!-- Header -->
      <div class="text-center">
        <div
          class="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
        >
          <Icon name="mdi:shield-account" class="h-8 w-8 text-white" />
        </div>
        <h2 class="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          {{ $t("login") }}
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to your admin account
        </p>
      </div>

      <!-- Login Form -->
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div
          class="bg-white dark:bg-gray-800 py-8 px-6 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div class="space-y-6">
            <!-- Email Field -->
            <InputGroup
              v-model="form.email"
              :label="$t('email')"
              name="email"
              type="email"
              autocomplete="email"
              :required="true"
              placeholder="admin@example.com"
              left-icon="mdi:email"
            />

            <!-- Password Field -->
            <InputGroup
              v-model="form.password"
              :label="$t('password')"
              name="password"
              type="password"
              autocomplete="current-password"
              :required="true"
              placeholder="••••••••"
              left-icon="mdi:lock"
            />

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="form.rememberMe"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  {{ $t("remember-me") }}
                </label>
              </div>

              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {{ $t("forget-password") }}
                </a>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="mt-6">
            <button
              type="submit"
              :disabled="loading"
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <Icon
                  name="mdi:login"
                  class="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                  :class="{ 'animate-spin': loading }"
                />
              </span>
              {{ loading ? "Signing in..." : $t("sign-in") }}
            </button>
          </div>
        </div>
      </form>

      <!-- Footer -->
      <div class="text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?
          <NuxtLink
            to="/register"
            class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Sign up
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const form = reactive({
  email: "",
  password: "",
  rememberMe: false,
})

const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    // Simulate login API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // For now, just redirect to dashboard
    await navigateTo("/")

    // In a real app, you would:
    // const authStore = useAuthStore()
    // await authStore.login(form.email, form.password)
  } catch (error) {
    console.error("Login failed:", error)
    // Handle error (show toast, etc.)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 0
  );
  background-size: 20px 20px;
}
</style>
