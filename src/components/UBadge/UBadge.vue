<template>
  <div class="unicorn-badge">
    <span v-if="animated" class="unicorn-badge__ping" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UBadge",

  props: {
    animated: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.unicorn-badge {
  min-width: 0.5rem;
  min-height: 0.5rem;
  max-height: 1rem;

  @apply p-1 flex items-center justify-center;
  @apply text-xs font-medium text-white;
  @apply rounded-full bg-red-400;
  @apply absolute right-0 top-0 transform-gpu;
  @apply -translate-y-1/3 translate-x-1/3;

  &__ping {
    z-index: -1;

    @apply animate-ping absolute inline-flex h-full w-full;
    @apply rounded-full bg-red-400 opacity-75;
  }
}
</style>
