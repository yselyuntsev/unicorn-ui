<template>
  <div
    class="unicorn-m-bottom-nav-item"
    :class="[{ active }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="unicorn-m-bottom-nav-item__inner">
      <u-icon class="unicorn-m-bottom-nav-item__inner-icon" :icon="icon" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import UIcon from "@/components/UIcon";

export default {
  name: "UMBottomNavItem",
  components: { UIcon },

  props: {
    icon: { type: String },
    active: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-m-bottom-nav-item {
  @apply flex flex-1 items-center justify-center h-full;

  &__inner {
    min-height: 2.5rem;
    max-height: 2.5rem;
    min-width: 2.5rem;
    max-width: 2.5rem;

    @apply inline-flex items-center;
    @apply rounded-md transition-all;
    @apply text-gray-500 relative transition-all;
  }

  &__inner-icon {
    @apply absolute left-2;
  }

  &.active {
    .unicorn-m-bottom-nav-item__inner {
      @apply bg-purple-200 text-purple-500;
    }
  }

  &:active {
    .unicorn-m-bottom-nav-item__inner {
      @apply transform-gpu scale-90;
    }
  }
}
</style>
