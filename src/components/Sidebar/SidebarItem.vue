<template>
  <div
    class="unicorn-sidebar-item"
    :class="[{ active }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <Icon v-if="icon" class="unicorn-sidebar-item__icon" :icon="icon" />
    <div class="unicorn-sidebar-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon";
export default {
  name: "SidebarItem",
  components: { Icon },
  props: {
    icon: { type: String },
    active: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-sidebar-item {
  @apply h-10 flex items-center px-4 rounded-md my-1;
  @apply transition-all origin-left text-gray-500 font-medium;

  @include hover {
    &:hover {
      @apply bg-purple-100 cursor-pointer text-purple-700;
    }
  }

  &:active {
    @apply transform-gpu scale-90;
  }

  &__content {
    @apply flex items-center ml-8;
  }

  // Active
  &.active {
    @apply bg-purple-500 text-white shadow-lg;
  }
}
</style>
