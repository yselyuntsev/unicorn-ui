<template>
  <div
    class="unicorn-tab"
    :class="{ active }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UTab",

  props: {
    active: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-tab {
  @apply inline-flex h-10 text-sm relative items-center px-4;
  @apply text-gray-500 rounded-lg font-medium;
  @apply transition-all mr-2;

  &:last-child {
    @apply mr-0;
  }

  @include hover {
    &:hover {
      @apply text-black cursor-pointer;
    }
  }

  &.active {
    @apply text-purple-600 bg-gray-50;
  }
}
</style>
