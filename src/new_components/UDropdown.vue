<template>
  <div class="u-dropdown">
    <slot name="activator" :on="genListeners()"></slot>

    <transition name="slide-t">
      <div
        ref="dropdown"
        v-if="show"
        v-click-outside="close"
        @click="close"
        :style="styles"
        class="u-dropdown__body"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from "../directives/click-outside";

export default {
  name: "u-dropdown",

  directives: {
    ClickOutside,
  },

  props: {
    width: {
      type: Number,
      default: 228,
    },
  },

  data() {
    return {
      show: false,
      right: false,
    };
  },

  computed: {
    styles() {
      return {
        maxWidth: this.width + "px",
        minWidth: this.width + "px",
        right: this.right && "0",
      };
    },
  },

  watch: {
    show: {
      handler(value) {
        value && this.$nextTick(() => this.calcPos());
      },
    },
  },

  methods: {
    genListeners() {
      const listeners = {};
      listeners.click = () => this.open();
      return listeners;
    },

    open() {
      this.show = true;
    },

    close() {
      this.show = false;
    },

    calcPos() {
      const { left } = this.$refs.dropdown.getBoundingClientRect();
      this.right = this.width + left > window.innerWidth - 16;
    },
  },
};
</script>

<style lang="scss" scoped>
.u-dropdown {
  @apply relative z-10;

  &__body {
    @apply absolute min-h-full top-0;
  }
}

.slide-t-enter-active,
.slide-t-leave-active {
  @apply transition-all;
}
.slide-t-enter,
.slide-t-leave-to {
  @apply opacity-0;
  @apply transform-gpu -translate-y-2;
}
</style>
