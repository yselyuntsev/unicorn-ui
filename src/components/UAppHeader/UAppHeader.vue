<template>
  <div class="unicorn-app-header">
    <div v-if="$slots.top" class="unicorn-app-header__top">
      <slot name="top"></slot>
    </div>

    <div class="unicorn-app-header__title unicorn-h1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UAppHeader",
};
</script>

<style lang="scss" scoped>
.unicorn-app-header {
  @apply flex flex-col;

  &__top {
    @apply flex justify-between;
  }

  &__title {
    @apply mt-4 mb-8 md:mt-8 md:mb-16 text-gray-700;
  }
}
</style>
