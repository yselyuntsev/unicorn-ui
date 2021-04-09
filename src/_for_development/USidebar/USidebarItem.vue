<template>
  <div
    class="unicorn-sidebar-item"
    :class="[{ active }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <u-icon v-if="icon" :icon="icon" />

    <div class="unicorn-sidebar-item__content" :class="{ icon }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UIcon from "@/components/UIcon";

export default {
  name: "USidebarItem",
  components: { UIcon },

  props: {
    icon: { type: String },
    active: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-sidebar-item {
  @apply h-12 flex items-center px-4 text-sm rounded-lg my-2;
  @apply transition-all origin-left text-gray-500 font-medium;
  @apply whitespace-nowrap;

  @include hover {
    &:hover {
      @apply cursor-pointer text-purple-600;
    }
  }

  &__content {
    @apply flex items-center whitespace-nowrap ml-12;

    &.icon {
      @apply ml-4;
    }
  }

  // Active
  &.active {
    @apply bg-gray-100 text-purple-600;
  }
}
</style>
