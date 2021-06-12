<script>
import "./UBadge.scss";

export default {
  name: "u-badge",

  props: {
    animated: Boolean,
  },
};
</script>

<template>
  <div class="u-badge">
    <span v-if="animated" class="u-badge__ping" />
    <slot></slot>
  </div>
</template>
