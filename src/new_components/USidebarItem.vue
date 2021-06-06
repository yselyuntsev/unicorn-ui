<template>
  <div :class="classes">
    <span v-if="$slots.icon || $scopedSlots.icon" class="u-sidebar-item__icon">
      <slot name="icon"></slot>
    </span>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "u-sidebar-item",

  props: {
    active: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-sidebar-item": true,
        "u-sidebar-item--active": this.active,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.u-sidebar-item {
  @apply flex items-center rounded-lg;
  @apply px-4 text-base font-medium h-11 text-gray-500;
  @apply transition-all my-1;

  &:hover {
    @apply bg-gray-50 cursor-pointer text-black;
  }

  &__icon {
    @apply w-11 h-11 inline-flex items-center justify-center;
    @apply mr-2 -ml-4;
  }

  &--active,
  &--active:hover {
    @apply bg-blue-50 text-blue-500;
  }
}
</style>
