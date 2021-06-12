<script>
import "./UTab.scss";

export default {
  name: "u-tab",

  props: {
    active: { type: Boolean },
  },
};
</script>

<template>
  <div v-on="$listeners" v-bind="$attrs" :class="{ active }" class="u-tab">
    <slot></slot>
  </div>
</template>
