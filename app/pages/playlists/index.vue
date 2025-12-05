<script setup lang="ts">
</script>

<template>
    <section class="flex flex-col pt-24 pb-12 gap-y-8 sm:py-16 md:gap-y-12">
      <AppPageHeader heading="Playlists" subheading="Learn how to make VSCode work for you with our comprehensive guides and tutorials." />
      <div class="container grid gap-y-4 sm:gap-8 grid-cols-1 md:gap-x-6 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4">
        <PlaylistFilters />
        <PlaylistGrid />
      </div>
    </section>
</template>

<style scoped></style>
