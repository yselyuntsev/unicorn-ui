<template>
  <div
    class="u-bottom-nav-item"
    :class="[{ active }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="u-bottom-nav-item__inner">
      <u-icon class="u-bottom-nav-item__inner-icon" :icon="icon" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "./UBottomNav.scss";

import { UIcon } from "../UIcon";

export default {
  name: "u-bottom-nav-item",
  components: { UIcon },

  props: {
    icon: { type: String },
    active: { type: Boolean },
  },
};
</script>
