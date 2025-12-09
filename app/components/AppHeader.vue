<script setup lang="ts">
</script>

<template>
    <header
        class="py-1.5 sm:py-4 fixed top-0 inset-x-0 sm:static z-10 bg-white border-b border-gray-200 sm:border-0 dark:border-0 dark:bg-gray-900">
      <div class="container flex items-center justify-between gap-x-10">
<!--        class - классы для надписи-->
<!--        icon-classes - классы для лого-->
        <AppLogo
            class="text-xl sm:text-2xl dark:text-white"
            icon-classes="size-8 sm:size-12 text-indigo-600 dark:text-white"
        >
          Code Editor
        </AppLogo>
        <AppHeaderNav />
        <AppHeaderMobileNav />
      </div>
    </header>
</template>

<style scoped></style>
