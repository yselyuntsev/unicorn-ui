<template>
  <div class="u-list" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "./UList.scss";

export default {
  name: "u-list",

  props: {
    dense: Boolean,
    disabled: Boolean,
    flat: Boolean,
    nav: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-list--dense": this.dense,
        "u-list--flat": this.flat,
        "u-list--disabled": this.disabled,
        "u-list--nav": this.nav,
      };
    },
  },
};
</script>
