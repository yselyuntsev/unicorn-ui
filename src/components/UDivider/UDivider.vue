<template>
  <div class="u-divider" :class="classes">
    <span class="u-divider__content">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import "./UDivider.scss";

export default {
  name: "u-divider",

  props: {
    flat: Boolean,
    dense: Boolean,
    simple: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-divider--dense": this.dense,
        "u-divider--flat": this.flat,
        "u-divider--simple": this.simple,
      };
    },
  },
};
</script>
