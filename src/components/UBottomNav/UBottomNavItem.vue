<script>
import "./UBottomNavItem.scss";

export default {
  name: "u-bottom-nav-item",

  props: {
    active: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-bottom-nav-item": true,
        "u-bottom-nav-item--active": this.active,
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
    <div
      v-if="$slots.icon || $scopedSlots.icon"
      class="u-bottom-nav-item__icon"
    >
      <slot name="icon"></slot>
    </div>

    <div class="u-bottom-nav-item__text">
      <slot></slot>
    </div>
  </div>
</template>
