<template>
  <div class="unicorn-m-app-header" ref="header" :style="borderRadius">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MobileAppHeader",

  data() {
    return {
      offset: 0,
      height: 0,
    };
  },

  computed: {
    ratio() {
      return this.offset / this.height;
    },

    borderRadius() {
      const radius = 32 - 32 * this.ratio;
      return "border-radius: 0 0 " + radius + "px " + radius + "px";
    },
  },

  mounted() {
    this.calculateHeight();
    window.addEventListener("scroll", this.handleScroll);
  },

  updated() {
    this.calculateHeight();
  },

  beforeDestroy() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    calculateHeight() {
      this.height = this.$refs.header.clientHeight;
    },

    handleScroll() {
      if (this.offset > this.height) return;
      this.offset = Math.min(window.scrollY, this.height);
    },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-m-app-header {
  @apply p-4 pb-16;
  @apply bg-purple-600;
}
</style>
