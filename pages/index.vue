<template>
  <div class="min-h-screen bg-surface-50 dark:bg-surface-900">
    <!-- Header -->
    <header class="bg-surface-card shadow-sm border-b border-surface-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <i class="pi pi-chart-line text-2xl text-primary mr-3"></i>
            <h1 class="text-2xl font-bold text-color">
              {{ $t("dashboard") }}
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <Button
              icon="pi pi-moon"
              severity="secondary"
              text
              rounded
              @click="darkModeStore.toggle"
              v-tooltip.bottom="'Toggle Dark Mode'"
            />
            <div class="flex items-center space-x-2">
              <Avatar icon="pi pi-user" size="normal" shape="circle" />
              <span class="text-sm text-color-secondary">Admin User</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Welcome Section -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-color mb-2">{{ $t("welcome") }}!</h2>
        <p class="text-color-secondary">
          Here's what's happening with your admin panel today.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card class="shadow-sm">
          <template #content>
            <div class="flex items-center">
              <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <i
                  class="pi pi-users text-xl text-blue-600 dark:text-blue-400"
                ></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-color-secondary">
                  {{ $t("total-users") }}
                </p>
                <p class="text-2xl font-bold text-color">1,234</p>
              </div>
            </div>
          </template>
        </Card>

        <Card class="shadow-sm">
          <template #content>
            <div class="flex items-center">
              <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <i
                  class="pi pi-desktop text-xl text-green-600 dark:text-green-400"
                ></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-color-secondary">
                  {{ $t("active-sessions") }}
                </p>
                <p class="text-2xl font-bold text-color">89</p>
              </div>
            </div>
          </template>
        </Card>

        <Card class="shadow-sm">
          <template #content>
            <div class="flex items-center">
              <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <i
                  class="pi pi-dollar text-xl text-purple-600 dark:text-purple-400"
                ></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-color-secondary">
                  {{ $t("revenue") }}
                </p>
                <p class="text-2xl font-bold text-color">$12,345</p>
              </div>
            </div>
          </template>
        </Card>

        <Card class="shadow-sm">
          <template #content>
            <div class="flex items-center">
              <div class="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <i
                  class="pi pi-chart-line text-xl text-orange-600 dark:text-orange-400"
                ></i>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-color-secondary">Growth</p>
                <p class="text-2xl font-bold text-color">+12.5%</p>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Recent Activity -->
      <Card class="shadow-sm">
        <template #title>
          <h3 class="text-lg font-medium text-color">
            {{ $t("recent-activity") }}
          </h3>
        </template>
        <template #content>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <i class="pi pi-user-plus text-lg text-green-500"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-color">New user registered</p>
                <p class="text-xs text-color-secondary">2 minutes ago</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <i class="pi pi-sign-in text-lg text-blue-500"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-color">User logged in</p>
                <p class="text-xs text-color-secondary">5 minutes ago</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <i class="pi pi-cog text-lg text-purple-500"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-color">Settings updated</p>
                <p class="text-xs text-color-secondary">10 minutes ago</p>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </main>
  </div>
</template>

<script lang="ts" setup>
const darkModeStore = useDarkModeStore()
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
