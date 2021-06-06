<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "u-avatar",

  props: {
    size: {
      type: Number,
      default: 44,
    },
    squared: Boolean,
  },

  computed: {
    styles() {
      return {
        maxWidth: this.size + "px",
        maxHeight: this.size + "px",
        minWidth: this.size + "px",
        minHeight: this.size + "px",
      };
    },

    classes() {
      return {
        "u-avatar": true,
        "u-avatar--squared": this.squared,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.u-avatar {
  @apply overflow-hidden rounded-full bg-gray-100;

  img,
  svg,
  .u-image {
    display: inline-flex;
    border-radius: inherit;
    width: inherit;
    height: inherit;
  }

  &--squared {
    @apply rounded-lg;
  }
}
</style>
