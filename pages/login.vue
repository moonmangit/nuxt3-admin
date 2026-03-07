<template>
  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Background with gradient and pattern -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface-50 to-primary-100 dark:from-surface-900 dark:via-surface-800 dark:to-primary-900"
    >
      <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
    </div>

    <!-- Floating geometric shapes for modern look -->
    <div
      class="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-pulse"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-32 h-32 bg-primary-300 dark:bg-primary-700 rounded-lg opacity-10 rotate-45"
    ></div>
    <div
      class="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full opacity-15"
    ></div>

    <!-- Main login card -->
    <div class="relative z-10 w-full max-w-md mx-4">
      <Card
        class="backdrop-blur-sm bg-surface-card/95 dark:bg-surface-card/90 shadow-2xl border border-surface-border/50"
      >
        <template #header>
          <div class="text-center py-6">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 shadow-lg"
            >
              <i class="pi pi-shield text-2xl text-primary-contrast"></i>
            </div>
            <h1 class="text-3xl font-bold text-color mb-2 tracking-tight">
              {{ $t("welcome") }}
            </h1>
            <p class="text-color-secondary text-sm">
              {{ $t("login") }} to your admin panel
            </p>
          </div>
        </template>

        <template #content>
          <form class="space-y-6 px-2" @submit.prevent="handleLogin">
            <div class="space-y-2">
              <label for="email" class="block text-sm font-semibold text-color">
                {{ $t("email") }}
              </label>
              <div class="relative">
                <InputText
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full h-12 pl-12 pr-4 border-surface-border focus:border-primary focus:ring-primary/20 transition-all duration-200 rounded-lg"
                  placeholder="Enter your email address"
                  required
                />
                <i
                  class="pi pi-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-color-secondary text-sm"
                ></i>
              </div>
            </div>

            <div class="space-y-2">
              <label
                for="password"
                class="block text-sm font-semibold text-color"
              >
                {{ $t("password") }}
              </label>
              <div class="relative">
                <Password
                  id="password"
                  v-model="form.password"
                  class="w-full h-12 pl-12 pr-12 border-surface-border focus:border-primary focus:ring-primary/20 transition-all duration-200 rounded-lg"
                  placeholder="Enter your password"
                  :feedback="false"
                  required
                  :toggle-mask="true"
                  fluid
                />
                <i
                  class="pi pi-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-color-secondary text-sm z-10"
                ></i>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  v-model="form.rememberMe"
                  input-id="remember"
                  class="border-surface-border"
                />
                <label
                  for="remember"
                  class="text-sm text-color-secondary cursor-pointer"
                >
                  {{ $t("remember-me") }}
                </label>
              </div>
              <NuxtLink
                to="/forgot-password"
                class="text-sm text-primary hover:text-primary-emphasis font-medium transition-colors duration-200"
              >
                {{ $t("forget-password") }}
              </NuxtLink>
            </div>

            <Button
              type="submit"
              :loading="loading"
              class="w-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary-emphasis"
              size="large"
            >
              <span v-if="!loading">{{ $t("sign-in") }}</span>
              <span v-else>Signing in...</span>
            </Button>
          </form>
        </template>

        <template #footer>
          <div class="text-center py-4 border-t border-surface-border/50">
            <p class="text-xs text-color-secondary">
              Don't have an account?
              <NuxtLink
                to="/register"
                class="text-primary hover:text-primary-emphasis font-medium ml-1"
              >
                Sign up
              </NuxtLink>
            </p>
          </div>
        </template>
      </Card>
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
  background-image:
    radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.15) 1px, transparent 0),
    linear-gradient(45deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%);
  background-size:
    20px 20px,
    40px 40px,
    40px 40px;
  background-position:
    0 0,
    0 0,
    20px 20px;
  animation: grid-move 20s ease-in-out infinite;
}

@keyframes grid-move {
  0%,
  100% {
    background-position:
      0 0,
      0 0,
      20px 20px;
  }
  50% {
    background-position:
      20px 20px,
      20px 20px,
      40px 40px;
  }
}

/* Smooth transitions for form elements */
form input:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
}

/* Modern button hover effects */
.p-button:hover {
  transform: translateY(-1px);
}

/* Card entrance animation */
.p-card {
  animation: card-entrance 0.6s ease-out;
}

@keyframes card-entrance {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
