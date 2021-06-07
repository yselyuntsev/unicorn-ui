<template>
  <div :class="classes">
    <div
      v-if="$slots.default || $scopedSlots.default || title"
      class="u-divider__title"
    >
      <slot>
        {{ title }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-divider",

  props: {
    flat: Boolean,
    title: String,
    dense: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-divider": true,
        "u-divider--dense": this.dense,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.u-divider {
  @apply h-16 w-full flex items-center;

  &:before,
  &:after {
    content: "";
    @apply h-px bg-black bg-opacity-5 w-full;
  }

  &__title {
    @apply px-4 text-sm text-gray-400;
  }

  &--dense {
    @apply h-8;
  }
}
</style>
