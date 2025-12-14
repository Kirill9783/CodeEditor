<script setup lang="ts">

defineProps<{ selected: boolean }>();

defineEmits(['click']);

</script>

<template>
  <li>
    <button
        @click="$emit('click')"
        :class="[
          'w-full cursor-pointer px-3 py-2 text-sm text-left rounded-md sm:rounded-lg dark:text-gray-300 transition-colors',
          selected ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'text-gray-300 hover:bg-gray-700'
        ]">
        <slot />
    </button>
  </li>
</template>

<style scoped></style>
