<template>
  <div>
    {{ $t("login") }}
    {{ $t("forget-password") }}
    <Button label="toggle dark/light" @click="toggle" />
  </div>
</template>

<script lang="ts" setup>
const { toggle } = useDarkMode()
</script>

<style></style>
