<template>
  <div class="unicorn-divider" :class="{ dense }">
    <span v-if="$slots.default" class="unicorn-divider__text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Divider",

  props: {
    dense: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-divider {
  @apply w-full h-px bg-gray-100;
  @apply my-4 md:my-8 relative;

  &__text {
    @apply bg-white px-4 absolute text-sm font-medium text-gray-500;
    @apply left-1/2 transform-gpu -translate-x-1/2;
    @apply leading-none;
    @apply top-1/2 -translate-y-1/2;
  }

  &.dense {
    @apply my-0;
  }
}
</style>
