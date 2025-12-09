<template>
  <div class="flex flex-col min-h-screen dark dark:bg-gray-800">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>