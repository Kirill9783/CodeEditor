<script setup lang="ts">

const model = defineModel<string>();

</script>

<template>
  <input
      v-model.trim="model"
      class="px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:border-indigo-600 focus:ring-1 sm:text-base sm:rounded-lg dark:focus:ring-indigo-400 dark:bg-gray-700 dark:border-0 dark:text-white dark:placeholder:text-gray-400"
  >
</template>

<style scoped></style>
