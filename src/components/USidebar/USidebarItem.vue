<script>
import "./USidebarItem.scss";

export default {
  name: "u-sidebar-item",

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
    </div>
  </div>
</template>
