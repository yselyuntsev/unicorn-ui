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
      // right: false,
      pos: {
        top: 0,
        left: 0,
      },
    };
  },

  computed: {
    styles() {
      return {
        maxWidth: this.width + "px",
        minWidth: this.width + "px",
        // right: this.right && "0",
        // top: this.top + "px",
        // top: this.pos.top + "px",
        // left: this.pos.left + "px",
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
    this.calcPos();
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
      // this.$nextTick(() => {
      //   this.$parent.$el.append(this.$refs.dropdown);
      // });
    },

    close() {
      this.show = false;
    },

    calcPos() {
      const { top, left } = this.$refs.container.getBoundingClientRect();
      this.pos = { top, left };
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
