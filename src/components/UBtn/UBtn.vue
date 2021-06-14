<script>
import "./UBtn.scss";

import variants from "../../mixins/variants";

import { URippleEffect } from "../URippleEffect";

export default {
  name: "u-btn",

  components: { URippleEffect },

  mixins: [variants],

  props: {
    dense: Boolean,
    disabled: Boolean,
    muted: Boolean,
    text: Boolean,
    block: Boolean,
    icon: Boolean,
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
        "is-block": this.block,
        "is-disabled": this.disabled,
        "is-icon": this.icon,
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
    <span
      v-if="!icon && ($slots.prepend || $scopedSlots.prepend)"
      class="u-btn__prepend"
    >
      <slot name="prepend"></slot>
    </span>

    <slot></slot>

    <span
      v-if="!icon && ($slots.append || $scopedSlots.append)"
      class="u-btn__append"
    >
      <slot name="append"></slot>
    </span>

    <u-ripple-effect v-if="rippleEffect" />
  </button>
</template>
