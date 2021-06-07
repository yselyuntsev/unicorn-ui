<template>
  <div @click="handleClick" :class="classes">
    <div class="u-sidebar-item__inner">
      <span
        v-if="$slots.icon || $scopedSlots.icon"
        class="u-sidebar-item__icon"
      >
        <slot name="icon"></slot>
      </span>

      <slot></slot>
    </div>
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

  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.u-sidebar-item {
  &:hover {
    @apply cursor-pointer text-black;
  }

  &:hover &__inner {
    @apply bg-gray-50;
  }

  &__icon {
    @apply w-11 h-11 inline-flex items-center justify-center;
    @apply mr-2 -ml-4;
  }

  &__inner {
    @apply text-base font-medium text-gray-700;
    @apply transition-all my-1 truncate;
    @apply px-4 inline-flex h-11 items-center rounded-lg;
  }

  &--active &__inner,
  &--active:hover &__inner {
    @apply bg-blue-50 text-blue-500;
  }
}
</style>
