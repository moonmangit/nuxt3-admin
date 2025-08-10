<template>
  <div class="bg-white text-black dark:bg-black dark:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useDarkModeStore().sync()
</script>
