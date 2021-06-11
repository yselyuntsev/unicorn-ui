<template>
  <div class="u-tab" :class="{ active }" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "u-tab",

  props: {
    active: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
.u-tab {
  @apply inline-flex h-11 text-base relative items-center px-4;
  @apply rounded-lg font-medium;
  @apply transition-all mr-2;

  &:last-child {
    @apply mr-0;
  }

  &:hover {
    @apply text-black cursor-pointer;
  }

  &.active {
    @apply bg-gray-50 text-blue-500;
  }
}
</style>
