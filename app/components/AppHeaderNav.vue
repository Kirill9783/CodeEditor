<script setup lang="ts">
</script>

<template>
  <nav class="hidden sm:block grow">
    <ul class="flex items-center gap-x-8">
      <li class="mr-auto">
        <AppHeaderNavLink to="/playlists">Library</AppHeaderNavLink>
      </li>
      <li>
        <AppHeaderNavLink to="/login">log In</AppHeaderNavLink>
      </li>
      <li>
        <AppButton to="/register">Sign Up</AppButton>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
