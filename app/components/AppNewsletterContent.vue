<script setup lang="ts">
</script>

<template>
  <div class="container">
    <form class="flex justify-center gap-x-2">
      <input type="email" placeholder="Your Email"
             class="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-xs outline-hidden ring-transparent focus:border-indigo-600 focus:ring-1 w-96 sm:rounded-lg sm:text-base dark:focus:ring-indigo-400 dark:bg-gray-700 dark:border-0 dark:text-white dark:placeholder:text-gray-400">
      <button
          class="px-4 py-1 font-semibold rounded-md bg-indigo-600 text-indigo-50 cursor-pointer hover:bg-indigo-700 sm:px-6 sm:py-2 sm:rounded-lg">
        <span class="hidden sm:inline">Subscribe</span>
        <Icon name="plane" class="size-5 sm:hidden"/>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
