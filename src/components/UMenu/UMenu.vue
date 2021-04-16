<template>
  <div v-click-outside="close" class="u-menu">
    <slot name="activator" :on="genActivatorListeners()"></slot>

    <transition name="menu">
      <div
        v-if="active"
        class="u-menu__body"
        :style="styles"
        @mouseleave="openOnHover && close()"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import "./UMenu.scss";

import ClickOutside from "@/directives/click-outside";
import { convertToUnit } from "@/utils/convertToUnit";

export default {
  name: "UMenu",

  directives: {
    ClickOutside,
  },

  props: {
    width: { type: [String, Number], default: 196 },
    left: Boolean,
    right: Boolean,
    openOnHover: Boolean,
  },

  data() {
    return {
      active: false,
    };
  },

  computed: {
    styles() {
      return {
        left: Number(!this.left),
        right: Number(!this.right),
        width: convertToUnit(this.width),
        maxWidth: convertToUnit(this.width),
      };
    },
  },

  watch: {
    active: {
      handler(newValue) {
        if (newValue) {
          window.addEventListener("scroll", this.close);
        } else {
          window.removeEventListener("scroll", this.close);
        }
      },
    },
  },

  methods: {
    genActivatorListeners() {
      const listeners = {};

      if (this.openOnHover) {
        listeners.mouseenter = () => this.open();
      } else {
        listeners.click = () => this.open();
      }

      return listeners;
    },

    open() {
      this.active = true;
    },

    close() {
      this.active = false;
    },
  },
};
</script>
