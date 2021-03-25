<template>
  <div class="unicorn-m-app-bar" :class="[shadow]">
    <div class="unicorn-m-app-bar__left">
      <slot name="left"></slot>
    </div>

    <div class="unicorn-m-app-bar__page-title" v-if="offset >= 56">
      <slot></slot>
    </div>

    <div class="unicorn-m-app-bar__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UMAppbar",

  data() {
    return {
      offset: 0,
    };
  },

  computed: {
    shadow() {
      return this.offset >= 56 && "shadow-md";
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (this.offset > 56) return;
      this.offset = Math.min(window.scrollY, 56);
    },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-m-app-bar {
  @apply h-14 w-full flex items-start;
  @apply bg-purple-600;
  @apply sticky top-0 transition-shadow;

  &__left {
    @apply absolute flex items-center h-full left-0 px-4;
  }

  &__right {
    @apply absolute flex items-center h-full right-0 px-4;
  }

  &__page-title {
    @apply flex-1 flex justify-center h-full items-center px-4;
    @apply text-white text-lg font-medium;
  }
}
</style>
