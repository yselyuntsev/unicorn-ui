<script>
import "./UProgressbar.scss";

export default {
  name: "u-progressbar",

  props: {
    value: { type: Number },
    maxValue: { type: Number, default: 100 },
    minValue: { type: Number, default: 0 },
  },

  computed: {
    width() {
      const value = Math.min(this.value, this.maxValue);

      const minmax = Math.max(value - this.minValue, this.minValue);
      const ratio = minmax / this.maxValue;

      return ratio * 100 + "%";
    },
  },
};
</script>

<template>
  <div class="u-progressbar">
    <div class="u-progressbar__track" :style="{ width }"></div>
  </div>
</template>
