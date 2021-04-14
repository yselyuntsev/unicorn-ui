<template>
  <div class="u-avatar" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import "./UAvatar.scss";
import { convertToUnit } from "../../utils/convertToUnit";

export default {
  name: "u-avatar",

  props: {
    left: Boolean,
    right: Boolean,
    size: {
      type: [Number, String],
      default: 48,
    },
  },

  computed: {
    classes() {
      return {
        "u-avatar--left": this.left,
        "u-avatar--right": this.right,
      };
    },

    styles() {
      return {
        height: convertToUnit(this.size),
        width: convertToUnit(this.size),
        minWidth: convertToUnit(this.size),
      };
    },
  },
};
</script>
