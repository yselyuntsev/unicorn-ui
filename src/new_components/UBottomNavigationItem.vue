<template>
  <div :class="classes">
    <div
      v-if="$slots.icon || $scopedSlots.icon"
      class="u-bottom-navigation-item__icon"
    >
      <slot name="icon"></slot>
    </div>

    <div class="u-bottom-navigation-item__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-bottom-navigation-item",

  props: {
    active: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-bottom-navigation-item": true,
        "u-bottom-navigation-item--active": this.active,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.u-bottom-navigation-item {
  @apply flex flex-1 justify-center items-center flex-col;

  &__icon {
    @apply text-gray-500;
  }

  &__text {
    @apply text-xs font-medium text-gray-400;
  }

  &--active &__icon,
  &--active &__text {
    @apply text-blue-500;
  }
}
</style>
