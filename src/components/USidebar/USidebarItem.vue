<script>
import "./USidebarItem.scss";

import { URippleEffect } from "../URippleEffect";

export default {
  name: "u-sidebar-item",
  components: { URippleEffect },
  props: {
    active: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-sidebar-item": true,
        "u-sidebar-item--active": this.active,
      };
    },
  },

  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<template>
  <div @click="handleClick" :class="classes">
    <div class="u-sidebar-item__inner">
      <span
        v-if="$slots.icon || $scopedSlots.icon"
        class="u-sidebar-item__icon"
      >
        <slot name="icon"></slot>
      </span>

      <slot></slot>

      <u-ripple-effect />
    </div>
  </div>
</template>
