<template>
  <div class="unicorn-progressbar">
    <div class="unicorn-progressbar__track" :style="{ width }"></div>
  </div>
</template>

<script>
export default {
  name: "UProgressbar",

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

<style lang="scss" scoped>
.unicorn-progressbar {
  @apply flex w-full relative h-1 bg-gray-100;
  @apply rounded-lg;

  &__track {
    @apply absolute left-0 top-0 bottom-0 rounded-lg;
    @apply bg-blue-500 transition-all;
  }
}
</style>
