<template>
  <div class="u-progressbar" :class="classes" :style="styles">
    <div class="u-progressbar__bar" :style="barStyles"></div>
  </div>
</template>

<script>
import "./UProgressbar.scss";
import { convertToUnit } from "@/utils/convertToUnit";

export default {
  name: "u-progressbar",

  props: {
    value: Number,
    maxValue: {
      type: Number,
      default: 100,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    animated: Boolean,
    flat: Boolean,
    size: {
      type: [Number, String],
      default: 4,
    },
    variant: {
      type: String,
      default: "primary",
      validator: (val) =>
        ["primary", "error", "success", "warning", "info"].includes(val),
    },
  },

  computed: {
    barWidth() {
      const value = Math.min(this.value, this.maxValue);

      const minmax = Math.max(value - this.minValue, this.minValue);
      const ratio = minmax / this.maxValue;

      return ratio * 100 + "%";
    },

    classes() {
      return {
        [`u-progressbar--${this.variant}`]: true,
        "u-progressbar--animated": this.animated,
        "u-progressbar--flat": this.flat,
      };
    },

    styles() {
      return {
        height: convertToUnit(this.size),
      };
    },

    barStyles() {
      return {
        width: this.barWidth,
      };
    },
  },
};
</script>
