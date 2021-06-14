<script>
import "./UAvatar.scss";

export default {
  name: "u-avatar",

  props: {
    size: {
      type: [Number, String],
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

<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
