<template>
  <div class="u-alert" :class="classes">
    <div class="u-alert__wrapper">
      <u-icon class="u-alert__icon" :icon="icon" />

      <div class="u-alert__content">
        <slot></slot>
      </div>

      <u-btn
        class="u-alert__close"
        v-if="dismissible"
        icon
        small
        :variant="variant"
        :text="text || outlined"
      >
        <u-icon small :icon="closeIcon" />
      </u-btn>
    </div>
  </div>
</template>

<script>
import "./UAlert.scss";
import { UIcon } from "../UIcon";
import { UBtn } from "../UBtn";

export default {
  name: "UAlert",
  components: { UBtn, UIcon },

  props: {
    dense: Boolean,
    dismissible: Boolean,
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,

    closeIcon: {
      type: String,
      default: "mdi-close",
    },

    icon: {
      default: "",
      type: [Boolean, String],
      validator: (val) => typeof val === "string" || val === false,
    },

    variant: {
      type: String,
      validator: (val) =>
        ["primary", "error", "success", "warning", "info"].includes(val),
    },
  },

  computed: {
    classes() {
      let classes = {
        "u-alert--dense": this.dense,
        "u-alert--outlined": this.outlined,
        "u-alert--prominent": this.prominent,
        "u-alert--text": this.text,
        "u-alert--dismissible": this.dismissible,
      };

      if (this.variant) {
        classes[`u-alert--${this.variant}`] = true;
      }

      return classes;
    },
  },
};
</script>
