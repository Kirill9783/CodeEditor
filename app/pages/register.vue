<script setup lang="ts">

import AppButton from "~/components/AppButton.vue";

definePageMeta({
  layout: 'auth',
})

</script>

<template>
      <form class="flex flex-col gap-y-4 sm:gap-y-6">
        <AppFormField type="email" id="email">Email</AppFormField>
        <AppFormField type="password" id="password">Password</AppFormField>
        <AppFormField type="password" id="passwordConfirmation">Password Confirmation</AppFormField>
        <AppButton>Sign Up</AppButton>
      </form>
      <p class="mt-6 text-sm text-center text-gray-600 sm:mt-8 dark:text-gray-300">
        Already have an account? <NuxtLink to="/login"
                                    class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
        Log In
      </NuxtLink>
      </p>
</template>

<style scoped></style>
