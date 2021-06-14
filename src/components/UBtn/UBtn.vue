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
    disabled: Boolean,
    muted: Boolean,
    text: Boolean,
    rippleEffect: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      return {
        "u-btn": true,
        [this.variant]: this.variant,
        "is-dense": this.dense,
        "is-muted": this.muted,
        "is-text": this.text,
        "is-disabled": this.disabled,
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
  <button @click="handleClick" :class="classes" :disabled="disabled">
    <slot></slot>

    <u-ripple-effect v-if="rippleEffect" />
  </button>
</template>
