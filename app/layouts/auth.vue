<script setup lang="ts">

</script>

<template>
  <main class="dark grid place-items-center min-h-screen bg-gray-50 dark:bg-gray-800">
    <section class="flex flex-col items-center w-full p-3 gap-y-4 sm:gap-y-6">
      <NuxtLink to="/">
        <Icon name="code" class="size-14 -rotate-6 text-indigo-600 sm:size-16 dark:text-white"/>
      </NuxtLink>
      <div
          class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm sm:w-96 sm:p-6 sm:rounded-lg dark:bg-gray-900 dark:border-black dark:shadow-none">
    <slot />
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>