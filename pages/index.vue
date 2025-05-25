<template>
  <div class="bg-black text-white text-3xl">
    <Icon name="mdi:home" />
    <ul>
      <li v-for="usr in data" :key="usr.id">{{ usr.username }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// context
const { $service } = useNuxtApp()

const { data, pending } = await useAsyncData("get-all-user", async () => {
  return $service.user.getAll()
})
</script>

<style></style>
