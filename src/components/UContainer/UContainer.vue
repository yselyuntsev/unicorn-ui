<template>
  <div class="u-container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "./UContainer.scss";

export default {
  name: "u-container",

  props: {
    fluid: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-container--container": !this.fluid,
        "u-container--fluid": this.fluid,
      };
    },
  },
};
</script>
