<template>
  <div class="u-tab" :class="{ active }" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
import "./UTabs.scss";

export default {
  name: "u-tab",

  props: {
    active: Boolean,
  },
};
</script>
