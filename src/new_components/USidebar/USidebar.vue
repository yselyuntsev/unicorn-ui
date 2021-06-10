<script>
import "./USidebar.scss";

import toggleable from "../../mixins/toggleable";
import overlayable from "../../mixins/overlayable";

export default {
  name: "u-sidebar",

  inject: ["breakpoints"],

  mixins: [toggleable, overlayable],

  props: {
    width: {
      type: Number,
      default: 320,
    },
  },

  computed: {
    temporary() {
      return !this.breakpoints.lg;
    },

    transform() {
      return !this.temporary || this.isActive ? 0 : -100;
    },

    showOverlay() {
      return this.isActive && this.temporary;
    },

    classes() {
      return {
        "u-sidebar": true,
        "u-sidebar--open": this.isActive,
        "u-sidebar--temporary": this.temporary,
      };
    },

    styles() {
      return {
        transform: `translateX(${this.transform}%)`,
        maxWidth: this.temporary ? "280px" : this.width + "px",
        minWidth: this.temporary ? "280px" : this.width + "px",
      };
    },
  },

  watch: {
    showOverlay: {
      handler(value) {
        this.$nextTick(() => {
          value ? this.generateOverlay() : this.removeOverlay();
        });
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div :class="classes" :style="styles">
    <div
      v-if="$slots.prepend || $scopedSlots.prepend"
      class="u-sidebar__prepend"
    >
      <slot name="prepend"></slot>
    </div>

    <div class="u-sidebar__body">
      <slot></slot>
    </div>

    <div v-if="$slots.append || $scopedSlots.append" class="u-sidebar__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>
