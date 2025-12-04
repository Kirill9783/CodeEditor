<script setup lang="ts">

defineProps<{ icon: string }>();

</script>

<template>
  <a class="p-2 hover:bg-gray-100 rounded-md -mr-1.5 dark:hover:bg-gray-700">
    <Icon :name="icon" class="size-6 dark:text-white"/>
  </a>
</template>

<style scoped></style>
