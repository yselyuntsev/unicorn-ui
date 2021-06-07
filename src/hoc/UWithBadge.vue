<template>
  <div class="u-with-badge">
    <slot></slot>

    <div v-if="$slots.badge || $scopedSlots.badge" class="u-with-badge__badge">
      <slot name="badge"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-with-badge",
};
</script>

<style lang="scss" scoped>
.u-with-badge {
  @apply relative;

  &__badge {
    @apply absolute top-0 right-0;
    @apply transform-gpu translate-x-1/4 -translate-y-1/4;
  }
}
</style>
