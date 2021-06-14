<script>
import "./UBtn.scss";

import variants from "../../mixins/variants";
import URippleEffect from "../URippleEffect/URippleEffect";

export default {
  name: "u-btn",
  components: { URippleEffect },
  mixins: [variants],

  props: {
    dense: Boolean,
    muted: Boolean,
    text: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-btn": true,
        [`u-btn--${this.variant}`]: this.variant,
        "u-btn--dense": this.dense,
        "u-btn--muted": this.muted,
        "u-btn--text": this.text,
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

    <u-ripple-effect />
  </button>
</template>
