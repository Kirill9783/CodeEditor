<script setup lang="ts">

const {linkClasses = 'inline-block w-full p-2 text-sm font-semibold text-center rounded-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'} = defineProps<{
  link?: string,
  linkClasses?: string
}>();

</script>

<template>
  <li class="w-full">
    <NuxtLink :to="link"
       :class="linkClasses">
      <slot/>
    </NuxtLink>
  </li>
</template>

<style scoped></style>
