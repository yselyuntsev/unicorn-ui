<template>
  <div class="u-bottom-navigation">
    <div class="u-bottom-navigation__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-bottom-navigation",
};
</script>

<style lang="scss" scoped>
.u-bottom-navigation {
  @apply flex items-start;
  @apply h-20 bg-white  border-t border-gray-100;
  @apply sticky bottom-0 mt-4;

  &__inner {
    @apply h-14 flex w-full;
  }
}
</style>
