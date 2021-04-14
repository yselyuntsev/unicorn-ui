<template>
  <div class="u-app-sidebar" :class="classes" :style="styles">
    <div class="u-app-sidebar__prepend">
      <slot name="prepend"></slot>
    </div>

    <div class="u-app-sidebar__content">
      <slot></slot>
    </div>

    <div class="u-app-sidebar__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import "./UAppSidebar.scss";

import { convertToUnit } from "../../utils/convertToUnit";

import Overlayable from "../../mixins/overlayable";

import Toggleable from "../../mixins/toggleable";
import Adaptable from "../../mixins/adaptable";

export default {
  name: "u-app-sidebar",

  mixins: [Toggleable, Overlayable, Adaptable],

  props: {
    compact: Boolean,
    value: { default: true },
    temporary: Boolean,
    flat: Boolean,
    adaptive: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [Number, String],
      default: 256,
    },
  },

  computed: {
    classes() {
      return {
        "u-app-sidebar": true,
        "u-app-sidebar--compact": this.compact,
        "u-app-sidebar--open": this.isActive,
        "u-app-sidebar--temporary": this.temporary,
        "u-app-sidebar--flat": this.flat,
      };
    },

    computedWidth() {
      if (this.temporary && this.compact) return 72;
      if (this.temporary) return this.width;

      return this.compact && this.isActive
        ? "72"
        : this.isActive && !this.temporary
        ? this.width
        : 0;
    },

    computedTransform() {
      return this.isActive ? 0 : -100;
    },

    styles() {
      return {
        transform:
          this.temporary &&
          `translateX(${convertToUnit(this.computedTransform, "%")})`,
        width: convertToUnit(this.computedWidth),
        minWidth: convertToUnit(this.computedWidth),
      };
    },

    showOverlay() {
      return this.isActive && this.temporary;
    },
  },

  watch: {
    showOverlay: {
      handler(val) {
        this.$nextTick(() => {
          if (val) this.generateOverlay();
          else this.removeOverlay();
        });
      },
      immediate: true,
    },

    $lg() {
      if (this.adaptive) {
        this.isActive = !this.$lg && !this.temporary;
      }
    },
  },
};
</script>
