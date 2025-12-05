<script setup lang="ts">
import LessonList from "~/components/LessonList.vue";
</script>

<template>
  <div class="flex flex-col gap-y-4 lg:col-span-1">
    <PlaylistLessonsHeader />
    <LessonList />
  </div>
</template>

<style scoped></style>
