<script setup lang="ts">

import {useTagsStore} from "~/stores/tags";

const tagsStore = useTagsStore();

</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <TagListItem
        v-for="tag in tagsStore.tags"
        :key="tag.id"
        :selected="tagsStore.selectedTadIds.includes(tag.id)"
        @click="tagsStore.toggleTag(tag.id)"
    >
      {{ tag.name }}
    </TagListItem>
  </ul>
</template>

<style scoped></style>
