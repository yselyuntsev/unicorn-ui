<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "u-card",

  props: {
    wheel: Boolean,
    gradient: Array,
  },

  computed: {
    classes() {
      return {
        "u-card": true,
        "u-card--wheel": this.wheel,
        "u-card--gradient": !this.wheel && this.gradient,
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
  @apply flex flex-col items-start rounded-lg bg-white shadow-card p-4;

  &--wheel {
    @apply border-transparent bg-gray-50 shadow-none;
  }

  &--gradient {
    @apply border-transparent;
  }
}
</style>
