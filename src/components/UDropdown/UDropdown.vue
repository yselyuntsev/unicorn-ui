<script>
import "./UDropdown.scss";

import ClickOutside from "../../directives/click-outside";

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
      top: 0,
      left: 0,
    };
  },

  computed: {
    styles() {
      return {
        maxWidth: this.width + "px",
        minWidth: this.width + "px",
        left: this.left + "px",
        top: this.top + "px",
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

  mounted() {
    // this.calcPos();
    window.addEventListener("resize", this.calcPos);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.calcPos);
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
      const {
        left,
        height,
        width,
      } = this.$refs.container.getBoundingClientRect();

      this.top = height + 4;
      this.left =
        left + this.width > window.innerWidth ? -this.width + width : 0;
    },
  },
};
</script>

<template>
  <div ref="container" class="u-dropdown">
    <slot name="activator" :on="genListeners()"></slot>

    <transition name="slide-t">
      <div
        ref="dropdown"
        v-if="show"
        v-click-outside="close"
        :style="styles"
        class="u-dropdown__body"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
