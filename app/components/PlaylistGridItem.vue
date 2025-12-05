<script setup lang="ts">

const props = defineProps<{
  playlist: {
    title: string;
    description: string;
    tags: string[];
  }
}>();

const playlistSlug = props.playlist.title.toLowerCase().replaceAll(' ', '-');

</script>

<template>
  <NuxtLink :to="`/playlists/${playlistSlug}/lessons/getting-started-with-prettier`">
    <article
        class="flex flex-col h-full p-4 border border-gray-200 hover:border-indigo-600 rounded-md sm:rounded-xl sm:p-6 dark:hover:border-indigo-400 dark:bg-gray-700 dark:border-black dark:hover:border-indigo-400 dark:bg-gray-700 dark:border-black">
      <header>
        <h3 class="font-semibold sm:text-lg dark:text-white">{{ playlist.title }}</h3>
      </header>
      <p class="mt-2 mb-6 text-sm text-gray-600 sm:text-base dark:text-gray-400">
        {{ playlist.description }}
      </p>
      <footer class="mt-auto">
        <ul class="flex flex-wrap gap-x-2">
          <li v-for="tag in playlist.tags" :key="tag"
              class="px-2 py-1 text-xs font-medium text-indigo-600 rounded-full bg-indigo-50 dark:bg-indigo-600 dark:text-indigo-50 dark:bg-indigo-600 dark:text-indigo-50">
            {{  tag }}
          </li>
        </ul>
      </footer>
    </article>
  </NuxtLink>
</template>

<style scoped></style>
