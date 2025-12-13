<script setup lang="ts">

import {usePlaylistsStore} from "~/stores/playlists";
import {useLessonsStore} from "~/stores/lessons";

const {playlists} = usePlaylistsStore();
const {getLessonById} = useLessonsStore();

const lists = [
  {
    heading: 'Popular Playlists',
    items: playlists.slice(4, 7).map((playlist) => {

      if (!playlist.lessonIds[0]) {
        throw createError({statusCode: 404, message: `Lesson IDs not found`});
      }
      const lesson = getLessonById(playlist.lessonIds[0]);

      return {
        heading: playlist.title,
        link: getPlaylistLink(playlist, lesson),
      }
    })
  },
  {
    heading: 'Configurations',
    items: playlists.slice(0, 3).map((playlist) => {

      if (!playlist.lessonIds[0]) {
        throw createError({statusCode: 404, message: `Lesson IDs not found`});
      }
      const lesson = getLessonById(playlist.lessonIds[0]);

      return {
        heading: playlist.title,
        link: getPlaylistLink(playlist, lesson),
      }
    })
  },
  {
    heading: 'Social',
    items: [
      {
        heading: 'YouTube',
        link: 'https://youtube.com'
      },
      {
        heading: 'Telegram',
        link: 'https://telegram.org'
      },
      {
        heading: 'GitHub',
        link: 'https://github.com'
      },
    ]
  }
]

</script>

<template>
  <div class="flex flex-col gap-y-8 sm:gap-x-16 sm:flex-row">
    <AppFooterList
        v-for="list of lists"
        :key="list.heading"
        :list="list"
    />
  </div>
</template>

<style scoped></style>
