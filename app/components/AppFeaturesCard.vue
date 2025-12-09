<script setup lang="ts">

defineProps<{
  features: {
    icon: string,
    title: string,
    description: string,
    link: string,
  }
}>();

</script>

<template>
  <NuxtLink :to="features.link">
    <article
        class="bg-white rounded-md border border-gray-200 p-4 hover:border-indigo-600 h-full sm:rounded-xl sm:p-6 dark:hover:border-indigo-400 dark:bg-gray-800 dark:border-black">
      <header class="flex flex-col gap-y-3">
        <Icon :name="features.icon" class="size-10 text-indigo-600 sm:size-12 dark:text-indigo-400"/>
        <h3 class="font-semibold sm:text-lg dark:text-white">{{ features.title }}</h3>
      </header>
      <p class="text-gray-600 mt-1 text-sm sm:text-base dark:text-gray-400">
        {{ features.description }}
      </p>
    </article>
  </NuxtLink>
</template>

<style scoped></style>
