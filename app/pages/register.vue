<script setup lang="ts">

import AppButton from "~/components/AppButton.vue";

definePageMeta({
  layout: 'auth',
});

const emailError = ref('');
const passwordError = ref('');
const passwordConfirmationError = ref('');

// const error = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');

watch(email, (value) => {
  emailError.value = validateEmail(value) ?? '' // Если есть ошибка, то она будет показываться, если нет, то будет пустая строка
});

watch(password, (value) => {
  passwordError.value = validatePassword(value) ?? '';
})

watch(passwordConfirmation, (value) => {
  passwordConfirmationError.value = validatePasswordConfirmation(password.value, (value)) ?? '';
})

const isFormValid = computed(() => {
  const hasErrors = Boolean(emailError.value || passwordError.value || passwordConfirmationError.value);

  const allFieldsFilled = email.value && password.value && passwordConfirmation.value;

  return !hasErrors && allFieldsFilled;
});


//15-19 Проверяем если пользователь зарегистрирован, то перенаправляем его, если он жмет кнопку регистрации
const { loggedIn, fetch: fetchUserSession } = useUserSession();

if (loggedIn.value) {
  navigateTo('/playlists')
}

async function handleRegister() {

  //13, 45-67 и 86-91 - Валидация по факту ввода уже не нужна, так как сделана валидация в режиме реального времени
  // const emailError = validateEmail(email.value);
  //
  // if (emailError) {
  //   error.value = emailError;
  //
  //   return;
  // }
  //
  // const passwordError = validatePassword(password.value);
  //
  // if (passwordError) {
  //   error.value = passwordError;
  //
  //   return;
  // }
  //
  // const passwordConfirmationError = validatePasswordConfirmation(password.value, passwordConfirmation.value);
  //
  // if (passwordConfirmationError) {
  //   error.value = passwordConfirmationError;
  //
  //   return;
  // }

  await $fetch('/api/register', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  })

  await fetchUserSession();

  await navigateTo('/playlists');
}

</script>

<template>
      <form @submit.prevent="handleRegister" class="flex flex-col gap-y-4 sm:gap-y-6">
<!--        <div-->
<!--          v-if="error"-->
<!--          class="rounded-lg bg-red-100 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"-->
<!--        >-->
<!--          {{ error }}-->
<!--        </div>-->
        <AppFormField v-model.trim="email" type="email" id="email" :error="emailError">Email</AppFormField>
        <AppFormField v-model="password" type="password" id="password" :error="passwordError">Password</AppFormField>
        <AppFormField v-model="passwordConfirmation" type="password" id="passwordConfirmation" :error="passwordConfirmationError">Password Confirmation</AppFormField>
        <AppButton class="mt-2 sm:mt-1" :disabled="!isFormValid">Sign Up</AppButton>
      </form>
      <p class="mt-6 text-sm text-center text-gray-600 sm:mt-8 dark:text-gray-300">
        Already have an account? <NuxtLink to="/login"
                                    class="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
        Log In
      </NuxtLink>
      </p>
</template>

<style scoped></style>
