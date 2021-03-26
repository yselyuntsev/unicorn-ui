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
  @apply inline-flex h-12 relative items-center px-4;
  @apply text-gray-500 font-medium uppercase;
  @apply transition-all;

  &:after {
    content: "";
    @apply absolute h-0.5 bg-purple-600 left-0 right-0 bottom-0;
    @apply transform-gpu scale-x-0 transition-all;
  }

  @include hover {
    &:hover {
      @apply bg-gray-50 cursor-pointer;
    }
  }

  &.active {
    @apply text-purple-600;

    @include hover {
      &:hover {
        @apply bg-purple-100;
      }
    }

    &:after {
      @apply scale-x-100;
    }
  }
}
</style>
