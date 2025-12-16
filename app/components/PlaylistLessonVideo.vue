<script setup lang="ts">

defineProps<{ title: string }>();

</script>

<template>
  <iframe class="w-full aspect-video rounded-md sm:rounded-lg"
          src="https://www.youtube.com/embed/Ra563HfcxXU?list=PLXDouhCU5r6qRE46qQ2rYIPnbJ5a9jzmd"
          :title="title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</template>

<style scoped></style>
