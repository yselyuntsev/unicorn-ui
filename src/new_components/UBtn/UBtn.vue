<script>
import "./UBtn.scss";

import variants from "../../mixins/variants";

export default {
  name: "u-btn",

  mixins: [variants],

  props: {
    dense: Boolean,
    muted: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-btn": true,
        [`u-btn--${this.variant}`]: this.variant,
        "u-btn--dense": this.dense,
        "u-btn--muted": this.muted,
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
  <button @click="handleClick" :class="classes">
    <slot></slot>
  </button>
</template>
