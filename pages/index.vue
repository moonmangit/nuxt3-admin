<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header
      class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <Icon
              name="mdi:view-dashboard"
              class="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3"
            />
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ $t("dashboard") }}
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <button
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              @click="darkModeStore.toggle"
            >
              <Icon
                :name="
                  darkModeStore.$state.isDark
                    ? 'mdi:weather-sunny'
                    : 'mdi:weather-night'
                "
                class="h-5 w-5 text-gray-600 dark:text-gray-300"
              />
            </button>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:account-circle" class="h-6 w-6 text-gray-400" />
              <span class="text-sm text-gray-700 dark:text-gray-300"
                >Admin User</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Welcome Section -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {{ $t("welcome") }}!
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Here's what's happening with your admin panel today.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <div class="flex items-center">
            <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon
                name="mdi:account-group"
                class="h-6 w-6 text-blue-600 dark:text-blue-400"
              />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                {{ $t("total-users") }}
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                1,234
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <div class="flex items-center">
            <div class="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon
                name="mdi:monitor"
                class="h-6 w-6 text-green-600 dark:text-green-400"
              />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                {{ $t("active-sessions") }}
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">89</p>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <div class="flex items-center">
            <div class="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Icon
                name="mdi:currency-usd"
                class="h-6 w-6 text-purple-600 dark:text-purple-400"
              />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                {{ $t("revenue") }}
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                $12,345
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <div class="flex items-center">
            <div class="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Icon
                name="mdi:chart-line"
                class="h-6 w-6 text-orange-600 dark:text-orange-400"
              />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                Growth
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                +12.5%
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            {{ $t("recent-activity") }}
          </h3>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <Icon name="mdi:account-plus" class="h-5 w-5 text-green-500" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900 dark:text-white">
                  New user registered
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  2 minutes ago
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <Icon name="mdi:login" class="h-5 w-5 text-blue-500" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900 dark:text-white">
                  User logged in
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  5 minutes ago
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <Icon name="mdi:settings" class="h-5 w-5 text-purple-500" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900 dark:text-white">
                  Settings updated
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  10 minutes ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
const darkModeStore = useDarkModeStore()
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
