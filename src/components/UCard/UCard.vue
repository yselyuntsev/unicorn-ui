<template>
  <div class="u-card" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "./UCard.scss";

export default {
  name: "u-card",

  props: {
    flat: Boolean,
    hover: Boolean,
    outlined: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-card--flat": this.flat,
        "u-card--hover": this.hover,
        "u-card--outlined": this.outlined,
      };
    },
  },

  methods: {
    // TODO: progressbar for loading
    generateProgress() {},
  },
};
</script>
