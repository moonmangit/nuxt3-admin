<template>
  <div>
    {{ $t("login") }}

    {{ $t("forget-password") }}
    {{ darkModeStore.$state.isDark ? "Dark Mode" : "Light Mode" }}

    <button @click.prevent="darkModeStore.toggle">toggle</button>
  </div>
</template>

<script lang="ts" setup>
const darkModeStore = useDarkModeStore()
</script>

<style></style>
