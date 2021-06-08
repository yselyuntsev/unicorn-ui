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
  @apply fixed bottom-0 left-0 right-0 z-50;

  &__inner {
    @apply h-14 flex w-full;
  }
}
</style>
