<template>
  <div :class="classes" :style="styles">
    <div v-if="$slots.prepend || $scopedSlots.prepend" class="u-btn__prepend">
      <slot name="prepend"></slot>
    </div>

    <slot></slot>

    <div v-if="$slots.append || $scopedSlots.append" class="u-btn__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-card",

  props: {
    wheel: Boolean,
    gradient: Array,
    flat: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-card": true,
        "u-card--wheel": this.wheel,
        "u-card--gradient": !this.wheel && this.gradient,
        "u-card--flat": this.flat,
      };
    },

    styles() {
      if (!this.gradient || !this.gradient.length) {
        return;
      }

      const gradientColors = this.gradient.join(",");
      const gradient = `linear-gradient(to top right, ${gradientColors})`;

      return {
        background: gradient,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.u-card {
  @apply flex w-full flex-col items-start rounded-lg bg-white shadow-card p-4;

  &--wheel {
    @apply border-transparent bg-gray-50 shadow-none;
  }

  &--gradient {
    @apply border-transparent;
  }

  &--flat {
    @apply bg-transparent border-none shadow-none;
  }

  &__prepend {
    @apply mr-2;
  }

  &__append {
    @apply ml-2;
  }
}
</style>
