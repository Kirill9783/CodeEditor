<script setup lang="ts">

import {usePlaylistsStore} from "~/stores/playlists";

const { playlists } = usePlaylistsStore()

</script>

<template>
  <div class="col-span-1 grid gap-2 sm:gap-4 md:col-span-2 lg:grid-cols-2 xl:grid-cols-3 xl:col-span-3">
    <PlaylistGridItem
        v-for="playlist in playlists"
        :key="playlist.title"
        :playlist="playlist"
    />
  </div>
</template>

<style scoped></style>
