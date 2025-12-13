<script setup lang="ts">

import {useTagsStore} from "~/stores/tags";

const { tags } = useTagsStore();

</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <TagListItem v-for="tag in tags" :key="tag.id">{{ tag.name }}</TagListItem>
  </ul>
</template>

<style scoped></style>
