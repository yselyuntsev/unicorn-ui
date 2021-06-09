<template>
  <div class="u-app-bar">
    <div v-if="$slots.left || $scopedSlots.left" class="u-app-bar__left">
      <slot name="left"></slot>
    </div>

    <div class="u-app-bar__body">
      <slot></slot>
    </div>

    <div v-if="$slots.right || $scopedSlots.right" class="u-app-bar__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-app-bar",
};
</script>

<style lang="scss" scoped>
.u-app-bar {
  @apply flex w-full h-14 items-center shadow-sm bg-white sticky top-0 z-40;

  &__left {
    @apply inline-flex items-center h-12 p-1;
  }

  &__body {
    @apply flex flex-1 items-center py-1 px-4 h-12;
  }

  &__right {
    @apply inline-flex items-center h-12 p-1 flex-row-reverse;
  }
}
</style>
