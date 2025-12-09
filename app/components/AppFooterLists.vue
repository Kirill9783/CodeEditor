<script setup lang="ts">

const lists = [
  {
    heading: 'Popular Playlists',
    items: [
      {
        heading: 'Prettier',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
      {
        heading: 'GitLens',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
      {
        heading: 'Live Share',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
    ]
  },
  {
    heading: 'Configurations',
    items: [
      {
        heading: 'Settings',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
      {
        heading: 'Keyboard Shortcuts',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
      {
        heading: 'Code Snippets',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
    ]
  },
  {
    heading: 'Social',
    items: [
      {
        heading: 'YouTube',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
      {
        heading: 'Telegram',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
      },
      {
        heading: 'GitHub',
        link: '/playlists/prettier/lessons/getting-started-with-prettier'
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
