<script setup lang="ts">
</script>

<template>
  <div class="flex sm:hidden">
    <nav id="nav"
         class="absolute inset-x-0 bg-white border-b border-gray-200 top-full hidden target:block peer dark:border-0 dark:bg-gray-900">
      <ul class="flex flex-col items-center gap-y-2 px-3 pb-3">
        <AppHeaderMobileNavItem link="/playlists">Library</AppHeaderMobileNavItem>
        <AppHeaderMobileNavItem>Log In</AppHeaderMobileNavItem>
        <AppHeaderMobileNavItem linkClasses="inline-block w-full px-3 py-2 text-sm font-semibold text-center bg-indigo-600 rounded-md text-indigo-50 hover:bg-indigo-700">Sign Up</AppHeaderMobileNavItem>
      </ul>
    </nav>
    <AppHeaderMobileNavButton to="#nav" icon="bars" class="peer-target:hidden peer-target:[&+a]:block" />
    <AppHeaderMobileNavButton to="#" icon="xMark" class="hidden" />
  </div>
</template>

<style scoped></style>
