<script setup lang="ts">
import AppButton from "~/components/AppButton.vue";
</script>

<template>
  <div class="container">
    <form class="flex justify-center gap-x-2">
      <AppFormField type="email" placeholder="Your Email" class="w-60 sm:w-96" id="email" />
      <AppButton>
        <span class="hidden sm:inline">Subscribe</span>
        <Icon name="plane" class="size-5 sm:hidden"/>
      </AppButton>
    </form>
  </div>
</template>

<style scoped></style>
