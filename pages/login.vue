<template>
  <div
    class="grid grid-cols-[2fr_1fr] w-screen h-screen dark:text-surface-200 dark:bg-surface-900 overflow-hidden"
  >
    <section>
      <img
        src="/images/world.jpg"
        alt=""
        class="w-full h-full object-cover dark:brightness-100"
      />
    </section>

    <section class="flex flex-col items-center justify-center p-8">
      <form @submit.prevent="">
        <header>
          <h1 class="text-4xl font-bold">Welcome to the Login Page</h1>
          <p class="mt-2">Please enter your credentials to continue.</p>
        </header>
        <main>
          <!-- username -->
          <!-- password -->
        </main>
        <footer class="flex justify-between">
          <Button type="button" link label="forget password ?" />
          <Button type="submit" label="Login" />
        </footer>
      </form>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<style></style>
