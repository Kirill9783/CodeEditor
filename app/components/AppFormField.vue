<script setup lang="ts">

//Убираем наследование атрибутов, чтобы данное поле можно было использовать для различных целей.
//Например, type будет также передаваться, но не будет присваиваться всем input/
//Таким образов, input можно использовать для любых целей (например, поле поиска)
// v-bind="$attrs" - говорит о том, что будет присваивать атрибуты, указанные в родителе

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  id: string;
}>();

</script>

<template>
  <div class="flex flex-col gap-y-1">
    <AppLabel v-if="$slots.default" :for="id">
      <slot />
    </AppLabel>
    <AppInput :id="id" v-bind="$attrs" />
  </div>
</template>

<style scoped></style>
