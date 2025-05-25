<template>
  <div>
    {{ $t("login") }}
    {{ $t("forget-password") }}
    <Button label="toggle dark/light" @click="darkModeStore.toggle" />
    {{ darkModeStore.$state.isDark ? "Dark Mode" : "Light Mode" }}
  </div>
</template>

<script lang="ts" setup>
const darkModeStore = useDarkModeStore()
</script>

<style></style>
