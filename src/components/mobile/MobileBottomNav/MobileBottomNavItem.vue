<template>
  <div
    class="unicorn-m-bottom-nav-item"
    :class="[{ active }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="unicorn-m-bottom-nav-item__inner">
      <Icon :icon="icon" />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/desktop/Icon/Icon";
export default {
  name: "MobileBottomNavItem",
  components: { Icon },

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
    min-height: 2.5rem;

    @apply rounded-md transition-all;
    @apply text-gray-500;
  }

  &.active {
    .unicorn-m-bottom-nav-item__inner {
      @apply bg-purple-500 text-white shadow-lg;
    }
  }

  &:active {
    .unicorn-m-bottom-nav-item__inner {
      @apply transform-gpu scale-90;
    }
  }
}
</style>
