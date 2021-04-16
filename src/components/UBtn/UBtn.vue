<template>
  <button
    class="u-btn"
    v-on="$listeners"
    :class="classes"
    :type="type"
    :disabled="disabled"
    :value="value"
  >
    <span class="u-btn__content">
      <slot></slot>
    </span>

    <span class="u-btn__loader" v-if="loading">
      <u-icon icon="mdi-loading mdi-spin" />
    </span>
  </button>
</template>

<script>
import "./UBtn.scss";
import { UIcon } from "../UIcon";

export default {
  name: "u-btn",

  components: { UIcon },

  props: {
    text: Boolean,
    outlined: Boolean,
    block: Boolean,
    small: Boolean,
    icon: Boolean,
    disabled: Boolean,
    loading: Boolean,
    value: [String, Number, Array, Object, null],
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "default",
      validator: (val) =>
        ["default", "primary", "success", "error", "warning", "info"].includes(
          val
        ),
    },
  },

  computed: {
    classes() {
      return {
        "u-btn": true,
        [`u-btn--${this.variant}`]: true,
        "u-btn--block": this.block,
        "u-btn--disabled": this.disabled,
        "u-btn--icon": this.icon,
        "u-btn--loading": this.loading,
        "u-btn--small": this.small,
        "u-btn--outlined": this.outlined,
        "u-btn--text": this.text,
      };
    },
  },
};
</script>
